const getUserDetail = {url: '/user/getUserDetail', method: 'get'}
const getUserInfo = {url: '/user/getUserInfo', method: 'get'}
const deleteTourist = {url: '/user/deleteTourist', method: 'get'}
const updateUserIdCardAndRealName = {url: '/user/updateUserIdCardAndRealName', method: 'post'}
const createUserCollection = {url: '/user/createUserCollection', method: 'get'}
const getUserCollectionPage = {url: '/user/getUserCollectionPage', method: 'post'}
const getUserMoneyInfo = {url: '/user/getUserMoneyInfo', method: 'get'}
const getInviteQrcode = {url: '/user/getInviteQrcode', method: 'post'}
const getUserCouponPage = {url: '/user/getUserCouponPage', method: 'post'}
const getUserCouponDetail = {url: '/user/getUserCouponDetail', method: 'get'}
const getCouponByShareCode = {url: '/user/getCouponByShareCode', method: 'get'}
const getShopCollectionPage = {url: '/user/getShopCollectionPage', method: 'post'}

const updateAvatar = {url: '/user/updateAvatar', method: 'get'}
const updateUserNickname = {url: '/user/updateUserNickname', method: 'get'}
const updateUserPhone = {url: '/user/updateUserPhone', method: 'get'}
const rebindWechat = {url: '/user/rebindWechat', method: 'post'}
const editUserAddress = {url: '/user/editUserAddress', method: 'post'}
const getUserAddress = {url: '/user/getUserAddress', method: 'get'}
const getUserMessageEvent = {url: '/user/getUserMessageEvent', method: 'get'}
const getCouponById = {url: '/user/getCouponById', method: 'get'}
const getCouponDetail = {url: '/user/getCouponDetail', method: 'get'}
const createWantTravel = {url: '/user/createWantTravel', method: 'get'}
const getUserSubordinatePage = {url: '/user/getUserSubordinatePage', method: 'post'}
const closeUser = {url: '/user/closeUser', method: 'get'}
const getMainUserAddress = {url: '/user/getMainUserAddress', method: 'get'}
const getUserAddressList = {url: '/user/getUserAddressList', method: 'get'}
const deleteUserAddress = {url: '/user/deleteUserAddress', method: 'get'}
const createTracks = {url: '/user/createTracks', method: 'get'}
const deleteTracks = {url: '/user/deleteTracks', method: 'get'}
const getMineStatistics = {url: '/user/getMineStatistics', method: 'get'}
const createCollection = {url: '/user/createCollection', method: 'get'}
const deleteCollection = {url: '/user/deleteCollection', method: 'get'}
const getCollection = {url: '/user/getCollection', method: 'get'}
const getSearchHistory = {url: '/user/getSearchHistory', method: 'get'}
const createSearchHistory = {url: '/user/createSearchHistory', method: 'post'}
const clearSearchHistory = {url: '/user/clearSearchHistory', method: 'get'}
const getCollectionPage = {url: '/user/getCollectionPage', method: 'post'}
const getTracksPage = {url: '/user/getTracksPage', method: 'post'}
const deleteTrack = {url: '/user/deleteTrack', method: 'get'}
const createReservation = {url: '/user/createReservation', method: 'post'}
const getLastReservation = {url: '/user/getLastReservation', method: 'get'}
const cancelReservation = {url: '/user/cancelReservation', method: 'get'}
const getCommissionPage = {url: '/user/getCommissionPage', method: 'post'}
const getRewardQueue = {url: '/user/getRewardQueue', method: 'get'}
const getMyCommission = {url: '/user/getMyCommission', method: 'post'}
const getUserCommissionRank = {url: '/user/getUserCommissionRank', method: 'get'}
const getChampionByRankType = {url: '/user/getChampionByRankType', method: 'get'}
const getBalanceFlowCountAndMoney = {url: '/user/getBalanceFlowCountAndMoney', method: 'post'}
const getBalanceFlowCount = {url: '/user/getBalanceFlowCount', method: 'post'}
const getFreeOrderPage = {url: '/user/getFreeOrderPage', method: 'post'}

const getFreeOrderMoney = {url: '/user/getFreeOrderMoney', method: 'get'}
const getTotalUserCommission = {url: '/user/getTotalUserCommission', method: 'get'}
const getUserGroupByIdentityType = {url: '/user/getUserGroupByIdentityType', method: 'get'}
const getUserGroupMemberByMemberType = {url: '/user/getUserGroupMemberByMemberType', method: 'post'}
const getUserDirectPushNumberStatistics = {url: '/user/getUserDirectPushNumberStatistics', method: 'get'}
const getUserCommission = {url: '/user/getUserCommission', method: 'get'}
const getPromotionIncomeAndTotalAmount = {url: '/user/getPromotionIncomeAndTotalAmount', method: 'get'}
const getAvgPromotionIncome = {url: '/user/getAvgPromotionIncome', method: 'get'}
const getPromotionIncomeChange = {url: '/user/getPromotionIncomeChange', method: 'get'}
const getPromotionIncomeStatistics = {url: '/user/getPromotionIncomeStatistics', method: 'get'}
const getPromotionIdentityValue = {url: '/user/getPromotionIdentityValue', method: 'get'}
const getHistoryAward = {url: '/user/getHistoryAward', method: 'get'}
const getRewardQueueLately = {url: '/user/getRewardQueueLately', method: 'get'}
const getPromotionAwardDetail = {url: '/user/getPromotionAwardDetail', method: 'get'}
const editVoiceSet = {url: '/user/editVoiceSet', method: 'get'}
const getStaffCode = {url: '/user/getStaffCode', method: 'post'}
const getShopApply = {url: '/user/getShopApply', method: 'get'}
const getCatalogList = {url: '/user/getCatalogList', method: 'get'}
const editShopApply = {url: '/user/editShopApply', method: 'post'}
const getCardFlowCurrentMonth = {url: '/user/getCardFlowCurrentMonth', method: 'get'}
const getCardFlowStatistics = {url: '/user/getCardFlowStatistics', method: 'post'}
const getCardFlowRecordRank = {url: '/user/getCardFlowRecordRank', method: 'post'}
const getMyBusinessCard = {url: '/user/getMyBusinessCard', method: 'get'}
const editBusinessCard = {url: '/user/editBusinessCard', method: 'post'}
const getIncomeStatistics = {url: '/user/getIncomeStatistics', method: 'post'}
const deleteShopCollection = {url: '/user/deleteShopCollection', method: 'get'}
const addShopCollection = {url: '/user/addShopCollection', method: 'post'}
const getTotalUserAgentCommission = {url: '/user/getTotalUserAgentCommission', method: 'get'}
const getAgentCommissionDetailByTimeType = {url: '/user/getAgentCommissionDetailByTimeType', method: 'post'}
const isBossOrOwner = {url: '/user/isBossOrOwner', method: 'get'}
const getAreaApplyList = {url: '/user/getAreaApplyList', method: 'get'}
const getAreaApplyPage = {url: '/user/getAreaApplyPage', method: 'post'}
const editAreaApply = {url: '/user/editAreaApply', method: 'post'}
const cancelAreaApply = {url: '/user/cancelAreaApply', method: 'get'}
const getAreaApplyDetail = {url: '/user/getAreaApplyDetail', method: 'get'}
const deleteAreaApply = {url: '/user/deleteAreaApply', method: 'get'}
const getDayCommissionPage = {url: '/user/getDayCommissionPage', method: 'post'}
const getAreaHomeStatistics = {url: '/user/getAreaHomeStatistics', method: 'get'}
const getAreaPartnerPage = {url: '/user/getAreaPartnerPage', method: 'post'}

const getUserIdentity = {url: '/user/getUserIdentity', method: 'get'}
const getRankByType = {url: '/user/getRankByType', method: 'get'}
const getMyGroupStatistics = {url: '/user/getMyGroupStatistics', method: 'get'}

const switchIdentity = {url: '/user/switchIdentity', method: 'get'}
const getShareholderDetail = {url: '/user/getShareholderDetail', method: 'post'}
const getCardFlowPage = {url: '/user/getCardFlowPage', method: 'post'}
const getUserGroupPage = {url: '/user/getUserGroupPage', method: 'post'}
const getMemberAndPartnerIncome = {url: '/user/getMemberAndPartnerIncome', method: 'post'}
const transferCardPoint = {url: '/user/transferCardPoint', method: 'post'}
const changeBossRelationship = {url: '/user/changeBossRelationship', method: 'get'}
const getBossInviteQrcode = {url: '/user/getBossInviteQrcode', method: 'post'}
const changePointToCardPoint = {url: '/user/changePointToCardPoint', method: 'get'}

const getMyInviteFirstBuyStatistics = {url: '/user/getMyInviteFirstBuyStatistics', method: 'get'}
const getMyGiveIdentityRecordPage = {url: '/user/getMyGiveIdentityRecordPage', method: 'post'}
const subscribeFlashSaleSpu = {url: '/user/subscribeFlashSaleSpu', method: 'post'}
const cancelSubscribeFlashSaleSpu = {url: '/user/cancelSubscribeFlashSaleSpu', method: 'get'}
const getOrderSkuByTimeTypePage = {url: '/user/getOrderSkuByTimeTypePage', method: 'post'}
const getMyIncomeChange = {url: '/user/getMyIncomeChange', method: 'get'}

export default {
  getUserDetail,
  subscribeFlashSaleSpu,
  cancelSubscribeFlashSaleSpu,
  transferCardPoint,
  getUserInfo,
  getCardFlowPage,
  deleteShopCollection,
  addShopCollection,
  deleteTourist,
  updateUserIdCardAndRealName,
  createUserCollection,
  getUserCollectionPage,
  getUserMoneyInfo,
  getInviteQrcode,
  getUserCouponDetail,
  getUserCouponPage,
  getCouponByShareCode,
  updateAvatar,
  updateUserNickname,
  updateUserPhone,
  rebindWechat,
  editUserAddress,
  getUserAddress,
  getUserMessageEvent,
  getCouponById,
  getCouponDetail,
  createWantTravel,
  getUserSubordinatePage,
  closeUser,
  getMainUserAddress,
  getUserAddressList,
  deleteUserAddress,
  createTracks,
  deleteTracks,
  getMineStatistics,
  createCollection,
  deleteCollection,
  getCollection,
  getSearchHistory,
  createSearchHistory,
  clearSearchHistory,
  getCollectionPage,
  getTracksPage,
  deleteTrack,
  createReservation,
  getLastReservation,
  cancelReservation,
  getCommissionPage,
  getRewardQueue,
  getMyCommission,
  getBalanceFlowCountAndMoney,
  getBalanceFlowCount,
  getFreeOrderPage,
  getFreeOrderMoney,
  getTotalUserCommission,
  getUserGroupByIdentityType,
  getUserGroupMemberByMemberType,
  getUserDirectPushNumberStatistics,
  getUserCommission,
  getPromotionIncomeAndTotalAmount,
  getAvgPromotionIncome,
  getPromotionIncomeChange,
  getPromotionIncomeStatistics,
  getPromotionIdentityValue,
  getHistoryAward,
  getRewardQueueLately,
  getPromotionAwardDetail,
  editVoiceSet,
  getStaffCode,
  getShopApply,
  getCatalogList,
  editShopApply,
  getCardFlowCurrentMonth,
  getCardFlowStatistics,
  getUserCommissionRank,
  getShopCollectionPage,
  getChampionByRankType,
  getCardFlowRecordRank,
  getMyBusinessCard,
  editBusinessCard,
  getIncomeStatistics,
  getTotalUserAgentCommission,
  getAgentCommissionDetailByTimeType,
  isBossOrOwner,
  getAreaApplyList,
  getAreaApplyPage,
  editAreaApply,
  cancelAreaApply,
  getAreaApplyDetail,
  deleteAreaApply,
  getDayCommissionPage,
  getAreaHomeStatistics,
  getAreaPartnerPage,

  getUserIdentity,
  getRankByType,
  getMyGroupStatistics,

  switchIdentity,
  getShareholderDetail,
  getUserGroupPage,
  getMemberAndPartnerIncome,
  changeBossRelationship,
  getBossInviteQrcode,
  changePointToCardPoint,

  getMyInviteFirstBuyStatistics,
  getMyGiveIdentityRecordPage,
  getOrderSkuByTimeTypePage,
  getMyIncomeChange,
}
