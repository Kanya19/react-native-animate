import routeMap from './route-map'
import {navigate} from '~/route/navigation'
import wx from './wx'
import {Alert, Linking, Platform, Toast} from 'react-native'
import {openSettings, PERMISSIONS, request} from 'react-native-permissions'

const calc = require('yu.calculator')
const dateformat = require('yu.date')

function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const piObj = {
  x_PI: (3.14159265358979324 * 3000.0) / 180.0,
  PIs: 3.1415926535897932384626,
  a: 6378245.0,
  ee: 0.00669342162296594323,
}

/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
export const bdToGc = (bd_lon, bd_lat) => {
  const x_pi = (3.14159265358979324 * 3000.0) / 180.0
  const x = bd_lon - 0.0065
  const y = bd_lat - 0.006
  const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi)
  const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi)
  const gg_lng = z * Math.cos(theta)
  const gg_lat = z * Math.sin(theta)
  return {latitude: gg_lat, longitude: gg_lng}
}

/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export const gcToBd = (lng, lat) => {
  const z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * piObj.x_PI)
  const theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * piObj.x_PI)
  const bd_lng = z * Math.cos(theta) + 0.0065
  const bd_lat = z * Math.sin(theta) + 0.006
  return {latitude: bd_lat, longitude: bd_lng}
}

export default {
  formatNumber,
  formatTime,
  bdToGc,
  gcToBd,
}

export const desensitization = (str, beginLen, endLen) => {
  const len = str.length
  const firstStr = str.substr(0, beginLen)
  const lastStr = str.substr(endLen)
  const middleStr = str.substring(beginLen, len - Math.abs(endLen)).replace(/[\s\S]/gi, '*')
  return firstStr + middleStr + lastStr
}

export const humanizedNum = (num) => {
  if (num) {
    if (num < 100) {
      return num
    }
    if (num >= 100 && num < 10000) {
      return `${Math.floor(calc.div(num, 100))}00+`
    }
    if (num >= 10000 && num < 100000) {
      return `${calc.format(calc.div(num, 10000), 1)}万+`
    }
    if (num >= 100000) {
      return `${calc.format(calc.div(num, 10000), 0)}万+`
    }
  }
  return 0
}

/*
 * 参数说明：
 * number：要格式化的数字
 * places：保留几位小数
 * symbol：前缀
 * thousand：千分位符号
 * decimal：小数点
 * */

export const formatMoney = (number) => {
  if (number == null) {
    return '-'
  }
  number = (Number(number) || 0).toFixed(2)
  return `${number.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}`
}

export const miniNavigate = (url) => {
  console.log(url)
  try {
    const urlObj = typeof url === 'string' ? JSON.parse(url) : url
    if (routeMap[urlObj.path]) {
      if (urlObj.query) {
        if (urlObj.path === '/pages/customPage' && urlObj.query.id === 2) {
          navigate('SelectFarm')
          return
        }
        navigate(routeMap[urlObj.path], urlObj.query)
      } else {
        navigate(routeMap[urlObj.path])
      }
    } else {
      wx.showToast({icon: 'fail', title: '页面不存在'})
    }
  } catch (e) {
    console.log(e)
    wx.showToast({icon: 'fail', title: '路径不合法'})
  }
}

export const fixArticle = (content) => {
  if (content) {
    let result = content.replace('max-width', 'width')
    return result
  } else {
    return ''
  }
}

export const priceFormat = (price, decimal = true) => {
  if (!price) {
    let str = '0'
    if (decimal) {
      str += '.00'
    }
    return str
  }
  if (typeof price !== 'number') {
    price = Number(price) || 0
  }
  let str = JSON.stringify(price)
  let str2 = ''
  let arr = []
  if (str.split('.').length === 1) {
    arr = str.split('').reverse()
    for (let i = 0; i < arr.length; i++) {
      str2 += arr[i]
      if ((i + 1) % 3 === 0 && i + 1 !== arr.length) {
        str2 += ','
      }
    }
    str2 = `${str2.split('').reverse().join('')}`
    if (decimal) {
      str2 += '.00'
    }
  } else {
    arr = str.split('.')[0].split('').reverse()
    for (let i = 0; i < arr.length; i++) {
      str2 += arr[i]
      if ((i + 1) % 3 === 0 && i + 1 !== arr.length) {
        str2 += ','
      }
    }
    if (str.split('.')[1].length === 1) {
      str += '0'
    }
    str2 = `${str2.split('').reverse().join('')}.${str.split('.')[1]}`
  }
  return str2
}

export const getWebConfig = (context) => {
  return new Promise((resolve, reject) => {
    api
      .getWebConfigList()
      .then((list) => {
        let config = {}
        list.forEach((item) => {
          config[item.name] = item.value
        })
        // context.commit('UPDATE_CONFIG', config)
        resolve(config)
      })
      .catch(() => {
        reject()
      })
  })
}

// 日周月进行收益比较
export const priceCompare = (distribution) => {
  if (distribution.todayAmount === 0 && distribution.yesterdayAmount === 0) {
    distribution.compareYesterday = 0
  } else if (distribution.yesterdayAmount === 0) {
    distribution.compareYesterday = 100
  } else {
    distribution.compareYesterday =
      calc.mul((calc.div(distribution.todayAmount || 0, distribution.yesterdayAmount || 0) - 1).toFixed(3), 100) || 0
  }

  if (distribution.weekAmount === 0 && distribution.lastWeekAmount === 0) {
    distribution.compareLastWeek = 0
  } else if (distribution.lastWeekAmount === 0) {
    distribution.compareLastWeek = 100
  } else {
    distribution.compareLastWeek =
      calc.mul((calc.div(distribution.weekAmount || 0, distribution.lastWeekAmount || 0) - 1).toFixed(3), 100) || 0
  }

  if (distribution.monthAmount === 0 && distribution.lastMonthAmount === 0) {
    distribution.compareLastMonth = 0
  } else if (distribution.lastMonthAmount === 0) {
    distribution.compareLastMonth = 100
  } else {
    distribution.compareLastMonth =
      calc.mul((calc.div(distribution.monthAmount || 0, distribution.lastMonthAmount || 0) - 1).toFixed(3), 100) || 0
  }

  distribution.yesterdayAmount = priceFormat(distribution.yesterdayAmount)
  distribution.lastWeekAmount = priceFormat(distribution.lastWeekAmount)
  distribution.lastMonthAmount = priceFormat(distribution.lastMonthAmount)
  return distribution
}

const goToPrivacy = () => {
  navigate('Privacy')
}
const handlePermission = (resolve) => {
  let permission = {
    permissions: PERMISSIONS.IOS.PHOTO_LIBRARY,
    title: '请允许保存图片到您相册',
    desc: '我们需要获取您的相册权限，才能保存图片到您的相册',
  }

  if (Platform.OS === 'android') {
    permission = {
      permissions: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      title: '请开启存储权限',
      desc: '我们需要获取您的手机存储权限，才能保存图片到您的相册',
    }
  }

  request(permission.permissions)
    .then((status) => {
      if (status !== 'granted' && status !== 'unavailable') {
        Alert.alert(permission.title, permission.desc, [
          {
            text: '稍后再说',
            onPress: () => false,
            style: 'cancel',
          },
          {
            text: '打开设置',
            onPress: openSettings,
          },
        ])
      } else {
        resolve()
      }
    })
    .catch((e) => {
      resolve()
    })
}

export const callPhone = (phone) => {
  const url = `tel:${phone}`
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) {
        return Alert.alert('提示', `您的设备不支持该功能，请手动拨打 ${phone}`, [{text: '确定'}])
      }
      return Linking.openURL(url)
    })
    .catch((err) => {
      Toast.info(`出错了：${err}`, 1.5)
    })
}

export function getDownloadExpire(date) {
  // 有效期的毫秒数
  const time = dateformat.parse(date, 'yyyy-MM-dd hh:mm:ss').getTime() + 5 * 24 * 60 * 60 * 1000
  const now = new Date().getTime()
  if (time < now) {
    return '已过期'
  }
  const diff = time - now
  if (diff > 24 * 60 * 60 * 1000) {
    return `${Math.floor(diff / (24 * 60 * 60 * 1000))}天`
  }
  if (diff > 60 * 60 * 1000) {
    return `剩余${Math.floor(diff / (60 * 60 * 1000))}小时`
  }
  return `剩余${Math.floor(diff / (60 * 1000))}分钟`
}

export function formatFileSize(limit) {
  let size = ''
  if (limit < 0.1 * 1024) {
    // 如果小于0.1KB转化成B
    size = `${limit.toFixed(2)}B`
  } else if (limit < 0.1 * 1024 * 1024) {
    // 如果小于0.1MB转化成KB
    size = `${(limit / 1024).toFixed(2)}KB`
  } else if (limit < 0.1 * 1024 * 1024 * 1024) {
    // 如果小于0.1GB转化成MB
    size = `${(limit / (1024 * 1024)).toFixed(2)}MB`
  } else {
    // 其他转化成GB
    size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)}GB`
  }

  const sizestr = `${size}`
  const len = sizestr.indexOf('.')
  const dec = sizestr.substr(len + 1, 2)
  if (dec === '00') {
    // 当小数点后为00时 去掉小数部分
    return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
  }
  return sizestr
}

export const checkPermission = () => {
  return new Promise((resolve) => {
    if (Platform.OS === 'ios') {
      handlePermission(resolve)
    } else {
      storage
        .load({key: 'agreement'})
        .then((res) => {
          if (res === 0) {
            Alert.alert(
              '温馨提示',
              '由于您未同意隐私协议，我们不能使用相应功能，请阅读并同意隐私协议后，再继续操作，感谢您的理解。',
              [
                {
                  text: '稍后再说',
                  onPress: () => false,
                  style: 'cancel',
                },
                {
                  text: '阅读隐私协议',
                  onPress: goToPrivacy,
                },
              ],
            )
          } else {
            handlePermission(resolve)
          }
        })
        .catch((err) => {
          Alert.alert(
            '温馨提示',
            '由于您未同意隐私协议，我们不能使用相应功能，请阅读并同意隐私协议后，再继续操作，感谢您的理解。',
            [
              {
                text: '稍后再说',
                onPress: () => false,
                style: 'cancel',
              },
              {
                text: '阅读隐私协议',
                onPress: goToPrivacy,
              },
            ],
          )
        })
    }
  })
}
