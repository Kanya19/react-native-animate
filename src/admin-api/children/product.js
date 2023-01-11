// spu
const getSpuPage = {url: '/product/getSpuPage', method: 'post'}
const editSpuAndSku = {url: '/product/editSpuAndSku', method: 'post'}
const getSpuEditDetail = {url: '/product/getSpuEditDetail', method: 'get'}
const getProductPage = {url: '/product/getProductPage', method: 'post'}
const editSpuCommission = {url: '/product/editSpuCommission', method: 'post'}
const deleteProduct = {url: '/product/deleteProduct', method: 'get'}
const batchOfflineProduct = {url: '/product/batchOfflineProduct', method: 'post'}
const resetSorts = {url: '/product/resetSorts', method: 'Get'}

// 品牌
const getBrandPage = {url: '/brand/getBrandPage', method: 'post'}
const editBrand = {url: '/brand/editBrand', method: 'post'}
const getBrandDetail = {url: '/brand/getBrandDetail', method: 'get'}
const getBrandList = {url: '/brand/getBrandList', method: 'get'}
const deleteBrand = {url: '/brand/deleteBrand', method: 'get'}

// 销售属性
const getSpecPage = {url: '/product/getSpecPage', method: 'post'}
const editSpec = {url: '/product/editSpec', method: 'post'}
const deleteSpec = {url: '/product/deleteSpec', method: 'get'}
const getSpecList = {url: '/product/getSpecList', method: 'get'}

// 单位
const getUnitPage = {url: '/product/getUnitPage', method: 'post'}
const editUnit = {url: '/product/editUnit', method: 'post'}
const deleteUnit = {url: '/product/deleteUnit', method: 'get'}
const getUnitList = {url: '/product/getUnitList', method: 'get'}

// 运营模板
const getFreightPage = {url: '/product/getFreightPage', method: 'post'}
const editFreight = {url: '/product/editFreight', method: 'post'}
const getFreightDetail = {url: '/product/getFreightDetail', method: 'get'}
const deleteFreight = {url: '/product/deleteFreight', method: 'get'}
const getFreightList = {url: '/product/getFreightList', method: 'get'}

const getSkuAndSkuCommissionPage = {url: '/product/getSkuAndSkuCommissionPage', method: 'post'}
const editSkuCommission = {url: '/product/editSkuCommission', method: 'post'}
const deleteSkuCommission = {url: '/product/deleteSkuCommission', method: 'get'}

const editSpuCourierAmount = {url: '/product/editSpuCourierAmount', method: 'post'}
const getSpuCourierAmount = {url: '/product/getSpuCourierAmount', method: 'get'}

// 专区
const getZonePage = {url: '/product/getZonePage', method: 'post'}
const editZone = {url: '/product/editZone', method: 'post'}
const deleteZone = {url: '/product/deleteZone', method: 'get'}
const getZoneSpuDetail = {url: '/product/getZoneSpuDetail', method: 'get'}

const editSpuSort = {url: '/product/editSpuSort', method: 'post'}
const auditProduct = {url: '/product/auditProduct', method: 'get'}

export default {
  deleteBrand,
  getSpuPage,
  auditProduct,
  getBrandPage,
  editBrand,
  getBrandDetail,
  getSpecPage,
  editSpec,
  deleteSpec,
  getBrandList,
  getSpecList,
  getUnitPage,
  editUnit,
  deleteUnit,
  getUnitList,
  getFreightPage,
  editFreight,
  getFreightDetail,
  deleteFreight,
  getFreightList,
  editSpuAndSku,
  getSpuEditDetail,
  getProductPage,
  editSpuCommission,
  deleteProduct,

  getSkuAndSkuCommissionPage,
  editSkuCommission,
  deleteSkuCommission,

  editSpuCourierAmount,
  getSpuCourierAmount,

  getZonePage,
  editZone,
  deleteZone,
  getZoneSpuDetail,
  editSpuSort,
  batchOfflineProduct,
  resetSorts,
}
