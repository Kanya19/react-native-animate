const config = {
  version: '1.0.4', // 购买的版本 0 基础版 1 专业版 2 旗舰版

  primaryColor: '#2C89FF', // 主色
  secondColor: '#f2ab3c', // 辅色
  gradientStartColor: '#2C89FF', // 主渐变色-起始色
  gradientEndColor: '#f85824', // 主渐变色-结束色
  gradient: 'linear-gradient(to right, #2C89FF, #f85824)', // 主渐变色
  captchaImage: '/api/auth/captcha',
  captchaAdmin: '/auth/captcha',
  article: {
    AfterSaleService: 1, // 商品详情-售后保障
    BOOK_NOTICE: 2, // 预订须知
    CANCEL_ORDER: 3, // 取消预订
    MEMBER_NOTICE: 4, // 会员须知
    MEMBER_AGREEMENT: 5, // 会员协议
    BOOK_GUIDE: 6, // 预订指南
    CARD_CONTENT: 7, // 会员卡内容
  },
}

const dev = {
  privacyAgreement: 34, // 用户隐私协议
  serviceAgreement: 6, // 用户协议

  // url: 'http://yuren.ngrok.yurencloud.com:9080',
  env: 'dev',
  websocketUrl: 'ws://localhost:8085/im',
  url: 'http://localhost:8084',
  apiUrl: 'http://localhost:8084/api',
  updateImage: 'http://localhost:8084/api/common/uploadFile',
  selectionId: 25, // 首页精选-一级类目
  townArticleId: 10, // 康养小镇文章
  imageEditUrl: 'https://tww-design.lanchetech.com',
  certificateUrl: 'http://10.131.7.23:3001/#/pages/design/certificate',
  agreementId: 28, // 商圈合作id
  producerId: 32, // 厂家合作id
  abouttww: 8,
  goodsCustom: 46, // 好物系列
  bargainId: 3,
  cowRule: 30, // 农场规则
  treeRule: 31, // 果园规则
  realNameRule: 33, //电商保证金规则
  general_provisions: 43, // 规则玩法
  selectionEnum: {
    BRAND: 34, // 品牌闪购
    AREA: 26, // 精选馆区
    LIKE: 29, // 猜你喜欢
  },
  oneDiscount: 11, // 1折专区

  // 直播间配置
  appId: '8cc3e6be3564492d8cc8d84d11597eed',
  token:
    '0068cc3e6be3564492d8cc8d84d11597eedIABkAxLyPtUvM6M04t06PY68r1DPIkhzzslIGb7vIGUF6mHTcgkAAAAAEABuqWSutt/BYQEAAQC138Fh',
  channelId: '123456',
  uid: 0,
  stringUid: '0',
  JPushConfig: {appKey: '574df9e1eb10a85c2a2f421c', channel: 'dev', production: 1},
}

const test = {
  // imageEditUrl: 'http://10.131.7.165:1025',
  // certificateUrl: 'http://10.131.7.165:3001/#/pages/design/certificate',
  exchangeId: 35, // 兑换商城规则
  freeMallId: 41, // 免单商城规则
  commissionMallId: 41, // 佣金商城规则
  privacyAgreement: 34, // 用户隐私协议
  serviceAgreement: 6, // 用户协议
  general_provisions: 43, // 规则玩法

  imageEditUrl: 'https://tww-design.lanchetech.com',
  certificateUrl: 'https://tww.lanchetech.com/#/pages/design/certificate',

  env: 'test',
  websocketUrl: 'wss://tww.lanchetech.com/im',
  url: 'https://tww.lanchetech.com',
  apiUrl: 'https://tww.lanchetech.com/api',
  adminUrl: 'https://tww.lanchetech.com/admin-api',
  // adminUrl: 'http://10.131.10.132:8082/api',
  updateImage: 'https://tww.lanchetech.com/api/common/uploadFile',
  updateImages: 'https://tww.lanchetech.com/api/common/uploadMultiFile',
  goodsCustom: 46, // 好物系列
  selectionId: 25, // 首页精选-一级类目
  townArticleId: 10, // 康养小镇文章
  agreementId: 28, // 商圈合作id
  producerId: 32, // 厂家合作id
  abouttww: 8,
  bargainId: 36,
  realNameRule: 33, //电商保证金规则
  cowRule: 30, // 农场规则
  treeRule: 31, // 果园规则
  selectionEnum: {
    BRAND: 34, // 品牌闪购
    AREA: 26, // 精选馆区
    LIKE: 29, // 猜你喜欢
  },
  oneDiscount: 11, // 1折专区

  // 直播间配置
  appId: '8cc3e6be3564492d8cc8d84d11597eed',
  token:
    '0068cc3e6be3564492d8cc8d84d11597eedIABkAxLyPtUvM6M04t06PY68r1DPIkhzzslIGb7vIGUF6mHTcgkAAAAAEABuqWSutt/BYQEAAQC138Fh',
  channelId: '123456',
  uid: 0,
  stringUid: '0',
  JPushConfig: {appKey: '574df9e1eb10a85c2a2f421c', channel: 'dev', production: 1},
  article: {
    ABOUTUS: 12,
    DOWNLOAD: 15,
    LOGIN: 13,
    BUY: 14,
    TERM: 12,
    COPYRIGHT: 12,
    NOTICE: 12,
    ONLINE_DESIGN: 17,
  },
}

const testLin = {
  // imageEditUrl: 'http://10.131.7.165:1025',
  // certificateUrl: 'http://10.131.7.165:3001/#/pages/design/certificate',
  exchangeId: 35, // 兑换商城规则
  freeMallId: 41, // 免单商城规则
  commissionMallId: 41, // 佣金商城规则
  privacyAgreement: 34, // 用户隐私协议
  serviceAgreement: 6, // 用户协议
  general_provisions: 43, // 规则玩法

  imageEditUrl: 'https://tww-design.lanchetech.com',
  certificateUrl: 'https://tww.lanchetech.com/#/pages/design/certificate',

  env: 'test',
  websocketUrl: 'wss://tww.lanchetech.com/im',
  url: 'https://10.131.10.242:8081',
  apiUrl: 'http://10.131.10.242:8081/api',
  adminUrl: 'http://10.131.10.242:8081/admin-api',
  // adminUrl: 'http://10.131.10.132:8082/api',
  updateImage: 'http://10.131.10.242:8081/api/common/uploadFile',
  updateImages: 'http://10.131.10.242:8081/api/common/uploadMultiFile',
  goodsCustom: 46, // 好物系列
  selectionId: 25, // 首页精选-一级类目
  townArticleId: 10, // 康养小镇文章
  agreementId: 28, // 商圈合作id
  producerId: 32, // 厂家合作id
  abouttww: 8,
  bargainId: 36,
  realNameRule: 33, //电商保证金规则
  cowRule: 30, // 农场规则
  treeRule: 31, // 果园规则
  selectionEnum: {
    BRAND: 34, // 品牌闪购
    AREA: 26, // 精选馆区
    LIKE: 29, // 猜你喜欢
  },
  oneDiscount: 11, // 1折专区

  // 直播间配置
  appId: '8cc3e6be3564492d8cc8d84d11597eed',
  token:
    '0068cc3e6be3564492d8cc8d84d11597eedIABkAxLyPtUvM6M04t06PY68r1DPIkhzzslIGb7vIGUF6mHTcgkAAAAAEABuqWSutt/BYQEAAQC138Fh',
  channelId: '123456',
  uid: 0,
  stringUid: '0',
  JPushConfig: {appKey: '574df9e1eb10a85c2a2f421c', channel: 'dev', production: 1},
  article: {
    ABOUTUS: 12,
    DOWNLOAD: 15,
    LOGIN: 13,
    BUY: 14,
    TERM: 12,
    COPYRIGHT: 12,
    NOTICE: 12,
    ONLINE_DESIGN: 17,
  },
}

const uat = {
  exchangeId: 36, // 兑换商城规则
  privacyAgreement: 19, // 用户隐私协议
  serviceAgreement: 6, // 用户协议
  general_provisions: 44, // 规则玩法

  env: 'uat',
  websocketUrl: 'wss://uat.tww88.com/im',
  url: 'https://uat.tww88.com',
  apiUrl: 'https://uat.tww88.com/api',
  adminUrl: 'https://tww.lanchetech.com/admin-api',
  updateImage: 'https://uat.tww88.com/api/common/uploadFile',
  updateImages: 'https://uat.tww88.com/api/common/uploadMultiFile',
  goodsCustom: 10, // 好物系列
  selectionId: 25, // 首页精选-一级类目
  townArticleId: 10, // 康养小镇文章
  agreementId: 28, // 商圈合作id
  producerId: 33, // 厂家合作id
  abouttww: 3,
  realNameRule: 34, //电商保证金规则
  bargainId: 30,
  cowRule: 31, // 农场规则
  treeRule: 32, // 果园规则
  selectionEnum: {
    BRAND: 34, // 品牌闪购
    AREA: 26, // 精选馆区
    LIKE: 29, // 猜你喜欢
  },
  oneDiscount: 5, // 1折专区

  // 直播间配置
  appId: '8cc3e6be3564492d8cc8d84d11597eed',
  token:
    '0068cc3e6be3564492d8cc8d84d11597eedIABkAxLyPtUvM6M04t06PY68r1DPIkhzzslIGb7vIGUF6mHTcgkAAAAAEABuqWSutt/BYQEAAQC138Fh',
  channelId: '123456',
  uid: 0,
  stringUid: '0',
  JPushConfig: {appKey: '574df9e1eb10a85c2a2f421c', channel: 'dev', production: 1},
  article: {
    ABOUTUS: 12,
    DOWNLOAD: 15,
    LOGIN: 13,
    BUY: 14,
    TERM: 12,
    COPYRIGHT: 12,
    NOTICE: 12,
    ONLINE_DESIGN: 17,
  },
}

const prod = {
  // imageEditUrl: 'http://10.131.7.165:1025',
  // certificateUrl: 'http://10.131.7.165:3001/#/pages/design/certificate',

  exchangeId: 36, // 兑换商城规则
  freeMallId: 40, // 免单商城规则
  commissionMallId: 41, // 佣金商城规则
  privacyAgreement: 21, // 用户隐私协议
  serviceAgreement: 6, // 用户协议
  general_provisions: 44, // 规则玩法
  imageEditUrl: 'https://design.tuwangnet.com',
  certificateUrl: 'https://www.tuwangnet.com/#/pages/design/certificate',

  env: 'prod',
  websocketUrl: 'wss://www.tuwangnet.com/im',
  url: 'https://www.tuwangnet.com',
  apiUrl: 'https://www.tuwangnet.com/api',
  adminUrl: 'https://www.tuwangnet.com/admin-api',
  updateImage: 'https://www.tuwangnet.com/api/common/uploadFile',
  updateImages: 'https://www.tuwangnet.com/api/common/uploadMultiFile',
  selectionId: 25, // 首页精选-一级类目
  townArticleId: 10, // 康养小镇文章
  agreementId: 28, // 门店合作id
  producerId: 33, // 商家合作id
  abouttww: 3,
  goodsCustom: 10, // 好物系列
  realNameRule: 34, //电商保证金规则
  bargainId: 30,
  cowRule: 31, // 农场规则
  treeRule: 32, // 果园规则
  selectionEnum: {
    BRAND: 34, // 品牌闪购
    AREA: 26, // 精选馆区
    LIKE: 29, // 猜你喜欢
  },
  oneDiscount: 5, // 1折专区

  // 直播间配置
  appId: '8cc3e6be3564492d8cc8d84d11597eed',
  token:
    '0068cc3e6be3564492d8cc8d84d11597eedIABkAxLyPtUvM6M04t06PY68r1DPIkhzzslIGb7vIGUF6mHTcgkAAAAAEABuqWSutt/BYQEAAQC138Fh',
  channelId: '123456',
  uid: 0,
  stringUid: '0',
  JPushConfig: {appKey: '574df9e1eb10a85c2a2f421c', channel: 'dev', production: 1},
  article: {
    ABOUTUS: 12,
    DOWNLOAD: 15,
    LOGIN: 13,
    BUY: 14,
    TERM: 16,
    COPYRIGHT: 17,
    NOTICE: 18,
    ONLINE_DESIGN: 19,
  },
}

Object.assign(config, prod)

export default config
