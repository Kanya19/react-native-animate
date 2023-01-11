// 新版 获取商家所有的权限
const register = {
  url: '/auth/register',
  method: 'post',
}
const appRegister = {
  url: '/auth/appRegister',
  method: 'post',
}
const login = {
  url: '/auth/login',
  method: 'post',
}
const loginByOpenid = {
  url: '/auth/loginByOpenid',
  method: 'get',
}
const sendSmsCode = {
  url: '/auth/sendSmsCode',
  method: 'post',
}
const getTokenTicket = {
  url: '/auth/getTokenTicket',
  method: 'get',
}
const updatePasswordByPhone = {
  url: '/auth/updatePasswordByPhone',
  method: 'post',
}
const isPayLogin = {
  url: '/auth/isPayLogin',
  method: 'get',
}
const updatePayPassword = {url: '/auth/updatePayPassword', method: 'get'}

const getPhoneStatus = {url: '/auth/getPhoneStatus', method: 'get'}
const sendVerificationSmsCode = {url: '/auth/sendVerificationSmsCode', method: 'post'}

const wxRegister = {url: '/auth/wxRegister', method: 'post'}
const loginByPayPassword = {url: '/auth/loginByPayPassword', method: 'get'}
const captcha = {url: '/auth/captcha', method: 'get'}
const loginByPassword = {url: '/auth/loginByPassword', method: 'post'}

export default {
  register,
  getTokenTicket,
  login,
  sendSmsCode,
  loginByOpenid,
  updatePasswordByPhone,
  wxRegister,
  appRegister,
  getPhoneStatus,
  sendVerificationSmsCode,
  isPayLogin,
  updatePayPassword,
  loginByPayPassword,
  captcha,
  loginByPassword,
}
