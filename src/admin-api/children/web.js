const getAllWebConfig = {url: '/web/getAllWebConfig', method: 'get'}
const getHipoConfigList = {url: '/web/getHipoConfigList', method: 'get'}
const modifyWebConfig = {url: '/web/modifyWebConfig', method: 'post'}
const modifyHipoConfig = {url: '/web/modifyHipoConfig', method: 'post'}

const getHomeStatistics = {url: '/web/getHomeStatistics', method: 'get'}
const getHomeTodoList = {url: '/web/getHomeTodoList', method: 'get'}
const webBatch = {url: '/web/batch', method: 'get'}

const editBanner = {url: '/web/editBanner', method: 'post'}
const getBannerPage = {url: '/web/getBannerPage', method: 'post'}
const editNavigation = {url: '/web/editNavigation', method: 'post'}
const getNavigationPage = {url: '/web/getNavigationPage', method: 'post'}
const getNavigationDetail = {url: '/web/getNavigationDetail', method: 'get'}
const getBannerDetail = {url: '/web/getBannerDetail', method: 'get'}
const deleteBanner = {url: '/web/deleteBanner', method: 'get'}
const deleteNavigation = {url: '/web/deleteNavigation', method: 'get'}
const getStorePage = {url: '/web/getStorePage', method: 'post'}
const editStore = {url: '/web/editStore', method: 'post'}
const deleteStore = {url: '/web/deleteStore', method: 'get'}
const getStoreDetail = {url: '/web/getStoreDetail', method: 'get'}
const getAdvertisementPage = {url: '/web/getAdvertisementPage', method: 'post'}
const editAdvertisement = {url: '/web/editAdvertisement', method: 'post'}
const deleteAdvertisement = {url: '/web/deleteAdvertisement', method: 'get'}
const getAdvertisementDetail = {url: '/web/getAdvertisementDetail', method: 'get'}

const editCustomPage = {url: '/web/editCustomPage', method: 'post'}
const getCustomPageDetail = {url: '/web/getCustomPageDetail', method: 'get'}
const deleteCustomPage = {url: '/web/deleteCustomPage', method: 'get'}
const getCustomPage = {url: '/web/getCustomPage', method: 'post'}

const editPoster = {url: '/web/editPoster', method: 'post'}
const getPosterPage = {url: '/web/getPosterPage', method: 'post'}
const getPosterDetail = {url: '/web/getPosterDetail', method: 'get'}
const deletePoster = {url: '/web/deletePoster', method: 'get'}

const editOnePost = {url: '/web/editOnePost', method: 'post'}
const getOnePostPage = {url: '/web/getOnePostPage', method: 'post'}
const getOnePostDetail = {url: '/web/getOnePostDetail', method: 'get'}
const deleteOnePost = {url: '/web/deleteOnePost', method: 'get'}

export default {
  getAllWebConfig,
  getHipoConfigList,
  modifyWebConfig,
  modifyHipoConfig,
  getHomeStatistics,
  getHomeTodoList,
  webBatch,

  getCustomPageDetail,
  editCustomPage,
  getCustomPage,
  deleteCustomPage,

  editBanner,
  getBannerPage,
  editNavigation,
  getNavigationPage,
  getNavigationDetail,
  getBannerDetail,
  deleteBanner,
  deleteNavigation,

  getStorePage,
  editStore,
  deleteStore,
  getStoreDetail,

  getAdvertisementPage,
  editAdvertisement,
  deleteAdvertisement,
  getAdvertisementDetail,

  editPoster,
  getPosterPage,
  getPosterDetail,
  deletePoster,

  editOnePost,
  getOnePostPage,
  getOnePostDetail,
  deleteOnePost,
}
