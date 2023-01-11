const getAlipayAccount = {url: '/fund/getAlipayAccount', method: 'get'}
const editAlipayAccount = {url: '/fund/editAlipayAccount', method: 'post'}
const withdrawToAccount = {url: '/fund/withdrawToAccount', method: 'post'}
const editBankAccount = {url: '/fund/editBankAccount', method: 'post'}
const getBankAccount = {url: '/fund/getBankAccount', method: 'get'}
const getCoinFlowPage = {url: '/fund/getCoinFlowPage', method: 'post'}
const createVipBuy = {url: '/fund/createVipBuy', method: 'post'}
const getVipBuyPage = {url: '/fund/getVipBuyPage', method: 'post'}
const createPointRechargeOrder = {url: '/fund/createPointRechargeOrder', method: 'post'}
const getBalanceFlowPage = {url: '/fund/getBalanceFlowPage', method: 'post'}

export default {
  getAlipayAccount,
  getBalanceFlowPage,
  editAlipayAccount,
  withdrawToAccount,
  editBankAccount,
  getBankAccount,
  getCoinFlowPage,
  createVipBuy,
  getVipBuyPage,
  createPointRechargeOrder,
}
