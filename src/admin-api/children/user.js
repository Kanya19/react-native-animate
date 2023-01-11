const getUserPage = {url: '/user/getUserPage', method: 'post'}
const createUserRelationship = {url: '/user/createUserRelationship', method: 'get'}
const getUserDetail = {url: '/user/getUserDetail', method: 'get'}
const createUserPrivilege = {url: '/user/createUserPrivilege', method: 'post'}
const deleteUserPrivilege = {url: '/user/deleteUserPrivilege', method: 'get'}
const getWithdrawPage = {url: '/user/getWithdrawPage', method: 'post'}
const checkWithdraw = {url: '/user/checkWithdraw', method: 'post'}
const getUserRelationshipPage = {url: '/user/getUserRelationshipPage', method: 'post'}
const modifyUserInfo = {url: '/user/modifyUserInfo', method: 'post'}
const getReservationPage = {url: '/user/getReservationPage', method: 'post'}
const editReservation = {url: '/user/editReservation', method: 'post'}
const getUserQuotePage = {url: '/user/getUserQuotePage', method: 'post'}
const getUserCommissionPage = {url: '/user/getUserCommissionPage', method: 'post'}
const issueConsumeCommission = {url: '/user/issueConsumeCommission', method: 'post'}
const cancelCommission = {url: '/user/cancelCommission', method: 'get'}

const getUserGroupPage = {url: '/user/getUserGroupPage', method: 'post'}
const deleteUserGroup = {url: '/user/deleteUserGroup', method: 'get'}
const changeCaptain = {url: '/user/changeCaptain', method: 'get'}
const transferCaptain = {url: '/user/transferCaptain', method: 'get'}
const lockUserRelationship = {url: '/user/lockUserRelationship', method: 'get'}
const updateCardPoint = {url: '/user/updateCardPoint', method: 'get'}
const getShopApplyPage = {url: '/user/getShopApplyPage', method: 'post'}
const editShopApply = {url: '/user/editShopApply', method: 'post'}
const auditShopApply = {url: '/user/auditShopApply', method: 'post'}
const updateAdPoint = {url: '/user/updateAdPoint', method: 'get'}

const getTicketPage = {url: '/user/getTicketPage', method: 'post'}
const editTicket = {url: '/user/editTicket', method: 'post'}
const getTicketDetail = {url: '/user/getTicketDetail', method: 'get'}
const deleteTicket = {url: '/user/deleteTicket', method: 'get'}
const firstAuditTicket = {url: '/user/firstAuditTicket', method: 'post'}
const secondAuditTicket = {url: '/user/secondAuditTicket', method: 'post'}

const getUserAgentLevelPage = {url: '/user/getUserAgentLevelPage', method: 'post'}
const cancelUserAgentLevel = {url: '/user/cancelUserAgentLevel', method: 'get'}
const editUserAgentLevel = {url: '/user/editUserAgentLevel', method: 'post'}
const blockUser = {url: '/user/blockUser', method: 'get'}

const getAreaApplyPage = {url: '/user/getAreaApplyPage', method: 'post'}
const auditAreaApply = {url: '/user/auditAreaApply', method: 'post'}
const getAreaApplyDetail = {url: '/user/getAreaApplyDetail', method: 'get'}

export default {
  createUserRelationship,
  getUserPage,
  getAreaApplyPage,
  auditAreaApply,
  getAreaApplyDetail,
  getUserDetail,
  createUserPrivilege,
  getTicketPage,
  editTicket,
  getTicketDetail,
  firstAuditTicket,
  deleteTicket,
  secondAuditTicket,
  deleteUserPrivilege,
  getWithdrawPage,
  checkWithdraw,
  getUserRelationshipPage,
  modifyUserInfo,
  getReservationPage,
  editReservation,
  getUserQuotePage,
  getUserCommissionPage,
  issueConsumeCommission,
  cancelCommission,

  getUserGroupPage,
  deleteUserGroup,
  changeCaptain,
  transferCaptain,
  lockUserRelationship,
  updateCardPoint,
  getShopApplyPage,
  editShopApply,
  auditShopApply,
  updateAdPoint,

  getUserAgentLevelPage,
  cancelUserAgentLevel,
  editUserAgentLevel,

  blockUser,
}
