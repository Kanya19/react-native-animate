import Fly from 'flyio/dist/npm/fly'
import {Modal} from '@ant-design/react-native'
import {navigate} from '~/route/navigation'
import config from '~/imports/config'

import code from '../common/code'

const fly = new Fly()
const host = config.apiUrl
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  return new Promise((resolve) => {
    request.headers['X-Tag'] = 'flyio'
    request.headers['content-type'] = 'application/json'

    // 数组参数不做处理
    if (!Array.isArray(request.body)) {
      // 删除空字符参数
      request.body &&
        Object.keys(request.body).forEach((val) => {
          if (request.body[val] === '') {
            delete request.body[val]
          }
        })
      request.body = {
        ...request.body,
      }
    }

    // request.headers.Authorization =
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTc1NzEzMDA5MiIsImNyZWF0ZWQiOjE2MDM0MzExOTM4OTksImV4cCI6MTYwNDAzNTk5M30.XIAjJECIet8ZDELwEqB3taQHxSnQ3zyixtqD5YROj8vcMuIPQffyxxILj2L-ZaktZlcjpg87_ncJh52aSt00DQ'
    storage
      .load({key: 'token'})
      .then((res) => {
        request.headers.Authorization = `Bearer ${res}`
        resolve(request)
      })
      .catch(() => {
        resolve(request)
      })
  })
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    console.log(response.data.value)
    // 若是未登录，则跳转到登录页面
    if (response.data.code === code.UNAUTHORIZED) {
      navigate('Login')
    } else {
      if (response.data.code === '000000') {
        return response.data.value
      }
      throw response
    }
  },
  (err) => {
    // 请求出错，根据返回状态码判断出错原因
    if (err) {
      console.log(err)
      let response = {}
      try {
        response = JSON.parse(err.engine.response)
      } catch (e) {
        Modal.alert('糟糕', '服务器走神了', [
          {text: '取消', onPress: () => '', style: 'cancel'},
          {text: '确定', onPress: () => ''},
        ])
        return err
      }
      if (response.code === code.UNAUTHORIZED) {
        storage.remove({key: 'token'})
        Modal.alert('温馨提示', '请登录', [
          {text: '取消', onPress: () => '', style: 'cancel'},
          {text: '确定', onPress: () => navigate('Login')},
        ])
        return err
      } else if (response.status === 401) {
        storage.remove({key: 'token'})
        Modal.alert('温馨提示', '请登录', [
          {text: '取消', onPress: () => '', style: 'cancel'},
          {text: '确定', onPress: () => navigate('Login')},
        ])
        return err
      } else if (response.status === 404) {
        Modal.alert('温馨提示', '请求接口不存在', [{text: '确定', onPress: () => ''}])
        return err
      } else {
        // 自动登录不弹出错误
        if (['/auth/loginByOpenid', '/order/canBuyProduct'].indexOf(err.request.url) > -1) {
          return err
        }
        Modal.alert('温馨提示', response.message, [{text: '确定', onPress: () => ''}])
      }
      return err
    }
  },
)

fly.config.baseURL = host

const newHttpRequest = (setting) => (data, config) => {
  if (setting.config) {
    Object.assign(config, setting.config)
  }
  if (setting.method === 'get') {
    return fly.get(setting.url, data, config)
  }
  if (setting.method === 'post') {
    return fly.post(setting.url, data, config)
  }
}

export default {
  inject(allApis) {
    const apis = {}
    for (const modName in allApis) {
      const modApis = allApis[modName]
      for (const apiName in modApis) {
        if (apiName in apis) {
          throw Error(`API:${modName}.${apiName}命名冲突`)
        }
        const setting = modApis[apiName]
        apis[apiName] = newHttpRequest(setting)
      }
    }
    return apis
  },
}
