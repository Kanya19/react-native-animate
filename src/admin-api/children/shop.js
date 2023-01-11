const deleteShop = {url: '/shop/deleteShop', method: 'get'}
const editShop = {url: '/shop/editShop', method: 'post'}
const editShopUser = {url: '/shop/editShopUser', method: 'get'}
const getShopDetail = {url: '/shop/getShopDetail', method: 'get'}
const getShopPage = {url: '/shop/getShopPage', method: 'post'}
const editAppointmentSetting = {url: '/shop/editAppointmentSetting', method: 'post'}
const getAppointmentSettingBySpuId = {url: '/shop/getAppointmentSettingBySpuId', method: 'get'}
const getIndustryList = {url: '/shop/getIndustryList', method: 'post'}
const editIndustry = {url: '/shop/editIndustry', method: 'post'}
const deleteIndustry = {url: '/shop/deleteIndustry', method: 'get'}
const getIndustryFirstList = {url: '/shop/getIndustryFirstList', method: 'get'}
const getIndustrySecondList = {url: '/shop/getIndustrySecondList', method: 'post'}
const editShopBoss = {url: '/shop/editShopBoss', method: 'get'}
const getActivityRegisterPage = {url: '/shop/getActivityRegisterPage', method: 'post'}
const deleteActivityRegister = {url: '/shop/deleteActivityRegister', method: 'get'}
const auditActivityRegister = {url: '/shop/auditActivityRegister', method: 'post'}
const getFreezeAmountPage = {url: '/fund/getFreezeAmountPage', method: 'post'}

const getSelectionApplyPage = {url: '/product/getSelectionApplyPage', method: 'post'}
const auditSelectionApply = {url: '/product/auditSelectionApply', method: 'post'}
const getSelectionApplyDetail = {url: '/product/getSelectionApplyDetail', method: 'get'}
const auditSelection = {url: '/product/auditSelection', method: 'post'}
const resetMerchantPassword = {url: '/shop/resetMerchantPassword', method: 'get'}
const editShopServiceRate = {url: '/shop/editShopServiceRate', method: 'post'}

const getAnnouncementPage = {url: '/shop/getAnnouncementPage', method: 'post'}
const deleteAnnouncement = {url: '/shop/deleteAnnouncement', method: 'get'}
const editAnnouncement = {url: '/shop/editAnnouncement', method: 'post'}
const getAnnouncementDetail = {url: '/shop/getAnnouncementDetail', method: 'get'}

const getShopAnnouncementPage = {url: '/shop/getShopAnnouncementPage', method: 'post'}
const getShopAnnouncementList = {url: '/shop/getShopAnnouncementList', method: 'get'}
const sendAnnouncement = {url: '/shop/sendAnnouncement', method: 'post'}

export default {
  deleteShop,
  getFreezeAmountPage,
  editShopServiceRate,
  editShop,
  editShopUser,
  getShopDetail,
  getShopPage,
  editAppointmentSetting,
  getAppointmentSettingBySpuId,
  getIndustryList,
  editIndustry,
  deleteIndustry,
  getIndustryFirstList,
  getIndustrySecondList,
  editShopBoss,
  getActivityRegisterPage,
  deleteActivityRegister,
  auditActivityRegister,

  getSelectionApplyPage,
  auditSelectionApply,
  auditSelection,
  getSelectionApplyDetail,
  resetMerchantPassword,

  getAnnouncementPage,
  deleteAnnouncement,
  editAnnouncement,

  getAnnouncementDetail,

  getShopAnnouncementPage,
  getShopAnnouncementList,
  sendAnnouncement,
}
