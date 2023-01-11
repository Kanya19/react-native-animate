import {Modal, Portal, Toast} from '@ant-design/react-native'

export default {
  showModal: (opt) => {
    if (opt.showCancel === false) {
      Modal.alert(opt.title, opt.content, [
        {
          text: opt.confirmText || '确认',
          style: {color: opt.confirmColor || '#FF2A41'},
          onPress: () => opt.success({confirm: true}),
        },
      ])
    } else {
      Modal.alert(opt.title, opt.content, [
        {
          text: opt.cancelText || '取消',
          style: {color: opt.cancelColor || '#333333'},
          onPress: () => opt.success({confirm: false}),
        },
        {
          text: opt.confirmText || '确认',
          style: {color: opt.confirmColor || '#FF2A41'},
          onPress: () => opt.success({confirm: true}),
        },
      ])
    }
  },
  showLoading: (opt) => {
    if (opt) {
      return Toast.loading(opt.title)
    } else {
      return Toast.loading()
    }
  },
  hideLoading: (key) => {
    Portal.remove(key)
  },
  showToast: (opt) => {
    if (opt.icon === 'success') {
      if (opt.duration) {
        return Toast.success(opt.title, opt.duration, null, false)
      } else {
        return Toast.success(opt.title, 2, null, false)
      }
    }
    if (opt.icon === 'fail') {
      if (opt.duration) {
        return Toast.fail(opt.title, opt.duration, null, false)
      } else {
        return Toast.fail(opt.title, 2, null, false)
      }
    }
    if (!opt.icon) {
      if (opt.duration) {
        return Toast.info(opt.title, opt.duration, null, false)
      } else {
        return Toast.info(opt.title, 2, null, false)
      }
    }
  },
}
