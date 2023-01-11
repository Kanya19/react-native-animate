const getBalanceFlowPage = {url: '/fund/getBalanceFlowPage', method: 'post'}
const getCoinFlowPage = {url: '/fund/getCoinFlowPage', method: 'post'}
const getCommissionRecordPage = {url: '/fund/getCommissionRecordPage', method: 'post'}
const getCommissionSum = {url: '/fund/getCommissionSum', method: 'post'}
const issueCommissionDirect = {url: '/fund/issueCommissionDirect', method: 'get'}
const issueCoinDirect = {url: '/fund/issueCoinDirect', method: 'get'}
const getTenantFlowPage = {url: '/fund/getTenantFlowPage', method: 'post'}
const getAllTenantWithdrawPage = {url: '/fund/getAllTenantWithdrawPage', method: 'post'}
const auditTenantWithdraw = {url: '/fund/auditTenantWithdraw', method: 'post'}

export default {
  getCommissionSum,
  getBalanceFlowPage,
  getCoinFlowPage,
  getCommissionRecordPage,
  issueCommissionDirect,
  issueCoinDirect,
  getTenantFlowPage,
  getAllTenantWithdrawPage,
  auditTenantWithdraw,
}
