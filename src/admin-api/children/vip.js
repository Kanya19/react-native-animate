const banUserForCommission = {url: '/vip/banUserForCommission', method: 'get'}
const createConsumptionRecord = {url: '/vip/createConsumptionRecord', method: 'post'}
const createUserLevel = {url: '/vip/createUserLevel', method: 'post'}
const getConsumptionAmountPage = {url: '/vip/getConsumptionAmountPage', method: 'post'}
const getConsumptionRecordPage = {url: '/vip/getConsumptionRecordPage', method: 'post'}
const updateUserLevel = {url: '/vip/updateUserLevel', method: 'get'}
const getHonorPage = {url: '/vip/getHonorPage', method: 'post'}
const editHonor = {url: '/vip/editHonor', method: 'post'}
const deleteHonor = {url: '/vip/deleteHonor', method: 'get'}
const deleteIdentity = {url: '/vip/deleteIdentity', method: 'get'}
const getIdentityPage = {url: '/vip/getIdentityPage', method: 'post'}
const getBonusCountList = {url: '/vip/getBonusCountList', method: 'get'}
const getCardFlowPage = {url: '/vip/getCardFlowPage', method: 'post'}
const countOrder = {url: '/vip/countOrder', method: 'post'}
const issueNationalCommission = {url: '/vip/issueNationalCommission', method: 'get'}
const getRewardQueuePage = {url: '/vip/getRewardQueuePage', method: 'post'}
const issueRewardQueue = {url: '/vip/issueRewardQueue', method: 'get'}

const getBonusCountPage = {url: '/vip/getBonusCountPage', method: 'post'}
const removeTeacher = {url: '/vip/removeTeacher', method: 'get'}

export default {
  banUserForCommission,
  createConsumptionRecord,
  createUserLevel,
  getConsumptionAmountPage,
  updateUserLevel,
  getConsumptionRecordPage,
  getHonorPage,
  editHonor,
  deleteHonor,
  getBonusCountList,

  deleteIdentity,
  getIdentityPage,
  getCardFlowPage,
  countOrder,
  issueNationalCommission,

  getRewardQueuePage,
  issueRewardQueue,

  getBonusCountPage,
  removeTeacher,
}
