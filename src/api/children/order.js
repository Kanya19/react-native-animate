const getConfirmOrderSkuInfo = {url: '/order/getConfirmOrderSkuInfo', method: 'post'}
const createWechatPayOrder = {url: '/order/createWechatPayOrder', method: 'post'}
const addToShoppingCart = {url: '/order/addToShoppingCart', method: 'post'}
const getShoppingCartSkuInfo = {url: '/order/getShoppingCartSkuInfo', method: 'post'}
const deleteShoppingCart = {url: '/order/deleteShoppingCart', method: 'get'}
const getOrderPage = {url: '/order/getOrderPage', method: 'post'}
const deleteOrders = {url: '/order/deleteOrders', method: 'get'}
const getOrderDetail = {url: '/order/getOrderDetail', method: 'get'}
const getOrderCommentDetail = {url: '/order/getOrderCommentDetail', method: 'get'}
const toggleOrderComment = {url: '/order/toggleOrderComment', method: 'get'}
const editAfterSale = {url: '/order/editAfterSale', method: 'post'}
const editAfterSaleLogistics = {url: '/order/editAfterSaleLogistics', method: 'post'}
const getAfterSale = {url: '/order/getAfterSale', method: 'get'}
const cancelAfterSale = {url: '/order/cancelAfterSale', method: 'get'}
const getAfterSalePage = {url: '/order/getAfterSalePage', method: 'post'}
const payOrderWithWechatPay = {url: '/order/payOrderWithWechatPay', method: 'get'}
const getLogisticsTrace = {url: '/order/getLogisticsTrace', method: 'get'}
const getLogisticsTraceAndAddress = {url: '/order/getLogisticsTraceAndAddress', method: 'get'}
const getOrderSkuAndOrderAddress = {url: '/order/getOrderSkuAndOrderAddress', method: 'get'}
const editOrderComment = {url: '/order/editOrderComment', method: 'post'}
const confirmOrder = {url: '/order/confirmOrder', method: 'get'}
const getConfirmOrderDetail = {url: '/order/getConfirmOrderDetail', method: 'post'}
const getOrderQrcodeInfo = {url: '/order/getOrderQrcodeInfo', method: 'post'}
const verifyOrderInfoByHashId = {url: '/order/verifyOrderInfoByHashId', method: 'get'}
const verifyConfirmOrderSku = {url: '/order/verifyConfirmOrderSku', method: 'get'}
const cancelGroupOrder = {url: '/order/cancelGroupOrder', method: 'get'}
const getResourceToken = {url: '/order/getResourceToken', method: 'get'}
const getGoodsOrderPage = {url: '/order/getGoodsOrderPage', method: 'post'}
const getGoodsOrderDetail = {url: '/order/getGoodsOrderDetail', method: 'get'}
const refundGoodsOrder = {url: '/order/refundGoodsOrder', method: 'post'}
const getVerifyGoodsOrderPage = {url: '/order/getVerifyGoodsOrderPage', method: 'post'}
const createGoodsOrder = {url: '/order/createGoodsOrder', method: 'post'}
const verifyConfirmGoodsOrder = {url: '/order/verifyConfirmGoodsOrder', method: 'get'}
const cancelGoodsOrder = {url: '/order/cancelGoodsOrder', method: 'get'}
const verifyVip = {url: '/order/verifyVip', method: 'post'}
const verifyPoint = {url: '/order/verifyPoint', method: 'post'}

export default {
  getGoodsOrderDetail,
  cancelGoodsOrder,
  createGoodsOrder,
  verifyConfirmGoodsOrder,
  getVerifyGoodsOrderPage,
  refundGoodsOrder,
  getGoodsOrderPage,
  getConfirmOrderSkuInfo,
  getResourceToken,
  createWechatPayOrder,
  addToShoppingCart,
  getShoppingCartSkuInfo,
  deleteShoppingCart,
  getOrderPage,
  deleteOrders,
  getOrderDetail,
  getOrderCommentDetail,
  toggleOrderComment,
  editAfterSale,
  editAfterSaleLogistics,
  getAfterSale,
  cancelAfterSale,
  getAfterSalePage,
  payOrderWithWechatPay,
  getLogisticsTrace,
  getLogisticsTraceAndAddress,
  getOrderSkuAndOrderAddress,
  editOrderComment,
  confirmOrder,
  getConfirmOrderDetail,
  getOrderQrcodeInfo,
  verifyOrderInfoByHashId,
  verifyConfirmOrderSku,
  cancelGroupOrder,
  verifyVip,
  verifyPoint,
}
