/* eslint-disable import/prefer-default-export */

export const WebConfigEnum = {
  MEMBER_CARD_BUY_PRICE: {
    value: 'MEMBER_CARD_BUY_PRICE',
    label: '会员卡购买年费价格',
  },
  MEMBER_CARD_SHARE_BUY_PRICE: {
    value: 'MEMBER_CARD_SHARE_BUY_PRICE',
    label: '会员卡购买年费价格(来自分享)',
  },
  MEMBER_CARD_RECHARGE_PRICE: {
    value: 'MEMBER_CARD_RECHARGE_PRICE',
    label: '会员卡年续费年费价格',
  },
  COMMISSION_FIRST_RATE: {
    value: 'COMMISSION_FIRST_RATE',
    label: '一级返佣比例',
  },
  COMMISSION_SECOND_RATE: {
    value: 'COMMISSION_SECOND_RATE',
    label: '二级返佣比例',
  },
  WITHDRAW_SETTING: {
    value: 'WITHDRAW_SETTING',
    label: '最低提现金额和每日最高免审核提现金额',
  },
}

export const CowStatus = {
  NORMAL: 0, // 常规
  EAT: 1, // 吃
}
export const MailBoxTypeEnum = {
  COW: 0, // 牧场信箱
  TREE: 1, // 果园信箱
}
export const FarmTypeEnum = {
  COW: 0, // 牧场
  TREE: 1, // 果园
}
export const TaskStatusEnum = {
  UNCLAIMED: 0, // 未领取
  CLAIMED: 1, // 已领取
  FINISHED: 2, // 已完成
}
export const FarmTaskKindEnum = {
  INVITE: 1, // L, "邀请好友"),
  ALL_FREE_SPU: 2, // L, "购买任意免单商品"),
  TARGET_FREE_SPU: 3, // , "购买指定免单商品"),
  ALL_SHOP_SPU: 4, // "购买任意商家商品"),
  TARGET_SHOP_SPU: 5, // "购买指定商家商品"),
  SIGN_IN: 6, // "签到"),
  SIGN_IN_CUMULATIVE: 7, // "累计签到"),
  VIEW_URL: 8, // "浏览指定页面"),
  POSTER: 9, // "分享推广海报"),
}

export const TreeStatusEnum = {
  SAPLING: 0,
  SMALL: 1,
  BIG: 2,
  FRUIT: 3,
  HARVEST: 4,
}
export const FarmTaskKindURL = {
  1: {path: '/pages/mine/invite'}, // "邀请好友"),
  2: {path: '/pages/category/free-mall', isTab: true}, // L, "购买任意免单商品"),
  3: {path: '/pages/home/productDetail'}, // , "购买指定免单商品"),
  4: {path: '/pages/home/shopList'}, // "购买任意商家商品"),
  5: {path: '/pages/home/shopSpuDetail'}, // "购买指定商家商品"),
  6: {path: '/pages/mine/signIn'}, // "签到"),
  7: {path: '/pages/mine/signIn'}, // "累计签到"),
  8: '', // "浏览指定页面"),
}

export const TreeStatusList = ['树苗', '小树', '大树', '结果', '收获']
export const ProductEnum = {
  TERRACE: 0, // 平台商品
  SHOP: 1, // 商家商品
}

export const IndicatorList = [
  '成交金额',
  '成交订单量',
  '退款订单量',
  '退款金额',
  '成交人数',
  '商品总访客数',
  '商品点击人数',
]

export const ShopApplyAuditEnum = {
  TO_AUDIT: 0, // "待审核"),
  PASS: 1, // "通过"),
  REJECT: 2, // "拒绝"),
  EDIT: 3, // "编辑中"),
}

export const SceneEnum = {
  CONSUMERS: 0, // 消费者
  SHOP_OWNER: 1, // 店主
}

export const SpuTypeEnum = {
  NORMAL: 0, // 免单商品
  SHOP: 1, // 商店商品
  EXCHANGE: 2, // 兑换商品
  ORDINARY: 3, // 常规商品
  COMMISSION: 4, // 佣金商品
}
export const SpuTypeMap = {
  0: '免单商品',
  1: '商店商品',
  2: '兑换商品',
  3: '常规商品',
  4: '佣金商品',
}

export const CompanyList = [
  '商品资质',
  '商标',
  '荣誉证书',
  '办公环境',
  '公司图片',
  '招商会',
  '品牌故事',
  '公司介绍',
  '直播平台',
  '轻创业模式',
  '合作',
]

export const SubscribeClientEnum = {
  WX_APPLET: 0, // 微信小程序订阅
  APP: 1, // APP订阅
}

export const StoreImageList = ['商品资质', '商标', '荣誉证书']

export const ArticleCatalogEnum = {
  ARTICLE: {value: 'ARTICLE', labefl: '默认目录'},
  HELP: {value: 'HELP', label: '帮助目录'},
  RECOMMEND: {value: 'RECOMMEND', label: '为你推荐'},
  TRAINER: {value: 'TRAINER', label: '健身教练'},
  SHOP: {value: 'SHOP', label: '店铺学习'},
  ANCHOR: {value: 'ANCHOR', label: '主播学习'},
  AGENT: {value: 'AGENT', label: '代理学习'},
}

export const ArticleCatalogMap = {
  ARTICLE: '默认目录',
  HELP: '帮助目录',
  RECOMMEND: '为你推荐',
  TRAINER: '健身教练',
  COURSE: '猜你喜欢的课程',
  SHOP: '店铺学习',
  ANCHOR: '主播学习',
  AGENT: '代理学习',
}

export const ProductApplyList = {
  0: '待审核',
  1: '通过',
  2: '拒绝',
}

export const ProductApplyDetailEnum = {
  NORMAL: 0,
  REJECT: 1,
}

export const ProductApplyDetailList = {
  0: '待审核',
  1: '审核通过，请寄样',
  2: '审核通过，无需寄样',
  3: '审核未通过',
}

export const ProductApplyEnum = {
  PENDING: 0, // 待审核
  PASS: 1, // 通过
  REJECT: 2, // 拒绝
}

export const PriceAuditEnum = {
  PENDING: 0, // 待审核
  PASS: 1, // 审核通过
  REJECT: 0, // 审核拒绝
}

export const AuditStatusEnum = {
  PENDING: 0, // 待审核
  PASS: 1, // 审核通过
  REJECT: 2, // 审核拒绝
}

export const MarginEnum = {
  NO: 0,
  YES: 1,
}

export const RealNameStatus = {
  NO: 0,
  YES: 1,
}
export const WithdrawalEnum = {
  NO: 0,
  YES: 1,
}

export const PromotionIconList = {
  9: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/cl.png',
  10: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/gd.png',
  11: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/fzx.png',
  12: 'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/zx.png',
}

export const ApplyShopType = {
  BUSINESS: 0,
  PRODUCER: 1,
}
export const HiddenMap = {
  0: '上架',
  1: '商户下架',
  2: '平台下架',
  3: '待审核',
}
export const HiddenEnum = {
  SHELVES: 0,
  MERCHANTS: 1,
  PLATFORM: 2,
  PENDING: 3,
}
export const DeletedEnum = {
  BEING: 0,
  DELETE: 1,
}

export const PayLoginTypeEnum = {
  SHOP: 0, // 商家登录
  AREA: 1, // 区域代理登录
  IDENTITY: 2, // 我的身份切换
}

export const Config = {
  ENV: 'dev',
  API_URL: 'https://hipo.lanchetech.com/api',
  URL: 'https://hipo.lanchetech.com',
  UPLOAD_FILE: 'https://hipo.lanchetech.com/api/common/uploadFile',
  UPLOAD_MULTI_FILE: 'https://hipo.lanchetech.com/api/common/uploadMultiFile',
  WEBSOCKET_URL: 'wss://hipo-im.lanchetech.com/im',
}

export const SmsTypeEnum = {
  REGISTER: {name: 'REGISTER', label: '注册验证码'},
  FORGET_PASSWORD: {name: 'FORGET_PASSWORD', label: '忘记密码验证码'},
  UPDATE_PHONE: {name: 'UPDATE_PHONE', label: '修改手机验证码'},
  DEFAULT: {name: 'DEFAULT', label: '身份验证'},
}

export const ProductCatalogEnum = {
  NEW_ONLINE: 1, // 最新上线
}

export const ProductClassifyEnum = {
  A_FREE_SINGLE: 0, // A类 免费领取，限会员本人使用，没有数量限制
  B_FREE_SINGLE_GROUP_PAY: 1, // B类 会员本人免费，携带人员按人数额外付费，没有数量限制
  C_FREE_ONCE_YEAR: 2, // C类 免费领取，每人一年只能领一次
  D_KILL_PRODUCT: 3, // "D类 秒杀商品"
  E_PAY_PRODUCT: 4, // "E类 会员价付费购买"
  F_FREE_ONCE_YEAR: 5, // F类 免费领取，每人一年只能领一次
}

export const OrderListTypeEnum = {
  USER: 1, // 用户订单
  SHOP: 2, // 商家订单
}

export const OrderTypeEnum = {
  SHOP_SALE: 0, // "门店销售"),
  ONLINE_EXPRESS: 1, // "线上销售-快递"),
  ONLINE_SELF: 2, // "线上销售-自提"),
}

export const OrderStatusEnum = {
  UNPAY: 0, // 待付款
  CANCEL: 1, // 已取消
  PAID: 2, // 已付款
  COMMENT: 3, // 待评价
  DONE: 4, // 已完成
  CLOSE: 5, // 已关闭
}

export const CloseReasonOption = [
  {value: 1, label: '其他'},
  {value: 2, label: '退货退款'},
  {value: 3, label: '仅退款'},
  {value: 4, label: '商品缺货'},
  {value: 5, label: '订单异常'},
  {value: 6, label: '因物流原因无法发货'},
]

export const LogisticsStatusEnum = {
  UNDO: 0,
  DONE: 1,
  RECEIVED: 2,
}

export const OrderStatusImageList = [
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-pay.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-close.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-delivery.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-comment.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-comment.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/v2/order-detail-close.png',
]

export const OrderStatusList = ['待付款', '已取消', '已付款', '待评价', '已完成', '已关闭']
export const OrderStatusIconList = ['clock', 'warning', 'logistics', 'comment-circle', 'checked', 'clear']

export const CommentStatusEnum = {
  CUSTOMER_CLOSE: 0,
  NORMAL: 1,
  OFFICE_CLOSE: 2,
}
export const TenantConfigEnum = {
  RETURN_ADDRESS: 'RETURN_ADDRESS', // '退货地址'
}

export const CommentStatusOption = ['待审核', '审核通过', '审核驳回', '关闭评论']

export const OrderStatusDescList = [
  '此订单还未付款',
  '此订单还未付款',
  '此订单已取消，欢迎下次购买',
  '已完成，期待您的下次购买',
  '已完成，期待您的下次购买',
  '已完成，期待您的下次购买',
  '订单已关闭',
]

// -------------------- 以下为新的
export const BannerSceneEnum = {
  HOME: 0,
  HOME_MIDDLE: 1,
  HOME_BOTTOM: 2,
  GO: 3,
  RANK: 4,
  MOBILE: 5,
}

export const GrassFlowTradeEnum = {
  0: '吃草',
  1: '新用户赠送',
  2: '任务奖励',
}

export const CowAfterAction = ['今天的草格外香，是有什么秘诀吗？', '这点草可不够我吃，我可是大胃王！再来点呗！']

export const CowAction = [
  '快喊TA一起免费领牛奶',
  'Hi，我是小哞，你的专属奶牛',
  '好草养好牛，牛奶才会好',
  '我可是一只精致的牛奶，快给我装扮一下吧',
  '无聊的时候，就摸摸我吧，让我陪你说说话逗你开心呀！',
  '勇敢牛牛，不怕困难！',
  '什么？对牛弹琴？我可是只懂音乐的牛牛！',
  '小样，你的牛奶，我承包了',
  '我觉得你照顾我是为了害我！害得我喜欢你呀！',
  '小样，你成功引起我的注意了！',
  '告诉你一个小秘密，做任务可以领取草料',
  '牛牛又有什么坏心眼呢？不过就想多吃点草',
  '如果累了就歇一会，毕竟养精蓄锐才能长远。',
  '别急，马上就挤满了！坚持就是胜利！',
]

export const TreeAfterAction = ['我觉得我还可以再喝点！', '你一直给我浇水，是想让我坠入爱河吗？', '你一出现水都变甜了']

export const TreeAction = [
  '快喊TA一起免费拿水果',
  '告诉你一个小秘密，肥料可以让我快快长大',
  '我有点渴了，可以给我浇点水吗？',
  '我觉得你照顾我是为了害我！害得我喜欢你呀！',
  '我掐指一算！你命里缺我！',
  '你和星星的区别是星星在天上，你在我心里',
  '我想我是栽在你手上了！',
  '真想快点长大，这样就能见到你了',
  '在努力一点，就可以跟你回家啦',
  '往后余生，我的果子，都给你。',
]

export const ShopSpuTypeEnum = {
  APPOINTMENT: 0, // 预约项目
  EXPERIENCE: 1, // 体验价
  ACTIVITY: 2, // 活动报名
}

export const WeekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export const ShopType = {
  NORMAL: 0, // 加盟商店
  EMS: 1, // EMS体验店
}

export const ShopTypeEnum = {
  GOODS: 0, // 预约项目
  EXPERIENCE: 1, // 体验价
  APPLY: 2, // 活动报名
}

export const NavigationSceneEnum = {
  HOME: 0, // 首页导航
  FREEMALLNAV: 1, // 免单商城导航
  COMMISSIONMALLNAV: 2, // 佣金商城导航
  EXCHANGEMALLNAV: 3, // 兑换商城导航
}

export const NavigationSceneMap = {
  0: '首页',
  1: '菜单',
}

export const FlashSaleSceneEnum = {
  HOME: 0,
  MENU: 1,
  PAGE: 2,
}

export const ActivityEnum = {
  // 活动
  KILL: '10', // 秒杀（此秒杀不使用）
  FLASH_SALE: '11', // 秒杀
  PACKAGES: '12', // 套餐
  BARGAIN: '13', // 砍价
  PROJECT: '14', // 预约项目
  EXPERIENCE: '15', // 体验项目
  APPLY: '16', // 活动报名
}

export const BlogTypeEnum = {
  TEXT: 0, // 文字博文
  VIDEO: 1, // 视频博文
}

export const BusinessWithdrawStatusList = {
  0: '待审核',
  1: '已通过',
  2: '已拒绝',
}

export const BusinessList = {
  0: '待发货',
  1: '已发货',
  // 商家后台设置的枚举
  10: '秒杀', // 此秒杀不使用
  11: '秒杀',
  12: '套餐',
  13: '砍价',
  14: '预约项目',
  15: '体验项目',
  16: '活动报名',
}

export const BusinessEnum = {
  UNDO: '0',
  DONE: '1',
  KILL: '10', // 秒杀（此秒杀不使用）
  FLASH_SALE: '11', // 秒杀
  PACKAGES: '12', // 套餐
  BARGAIN: '13', // 砍价
  PROJECT: '14', // 预约项目
  EXPERIENCE: '15', // 体验项目
  APPLY: '16', // 活动报名
}

export const TradeTypeList = ['商品销售收入', '商品退款支出', '提现支出', '系统发放收入', '系统扣除支出']

export const TradeTypeOption = [
  {value: '', label: '全部'},
  {value: 0, label: '商品销售收入'},
  {value: 1, label: '商品退款支出'},
  {value: 2, label: '提现支出'},
  {value: 3, label: '系统发放收入'},
  {value: 4, label: '系统扣除支出'},
]

export const ActivityList = {
  10: '秒杀', // 此秒杀不使用
  11: '秒杀',
  12: '套餐',
  13: '砍价',
  14: '预约项目',
  15: '体验项目',
  16: '活动报名',
}

export const PromotionEnum = {
  // 优惠
  COUPON: '40', // 优惠券
  COIN_REWARD: '41', // 积分奖励
  COIN_DEDUCTION: '42', // 积分抵扣
  ALLOWANCE: '43', // 购物津贴
  CONCESSION: '44', // 满减
  COIN_USE: '45', // 积分优惠
}

export const FreightTypeEnum = {
  WEIGHT: 0,
  COUNT: 1,
}

export const AreaLevelEnum = {
  PROVINCE: 1,
  CITY: 2,
  AREA: 3,
  STREET: 4,
}

export const CategoryLevelEnum = {
  FIRST: 0,
  SECOND: 1,
  THIRD: 2,
}

export const RefundReasonMap = {
  null: '/',
  98: '7天无理由退换货',
  1: '颜色/尺寸/参数不符',
  2: '退运费',
  3: '商品瑕疵',
  4: '质量问题',
  5: '少件/漏发',
  6: '收货商品时有划痕或破损',
  7: '假冒品牌',
  8: '未按约定时间发货',
  9: '发票问题',
  99: '其他问题',
}

export const LogisticsStatusList = ['未发货', '已发货', '已签收']

export const RemarkFlagList = ['红色', '橙色', '绿色', '蓝色', '紫色']

export const ExchangeReasonMap = {
  null: '/',
  98: '7天无理由换货',
  1: '颜色/尺寸/参数不符',
  3: '商品瑕疵',
  4: '质量问题',
  6: '收货商品时有划痕或破损',
  99: '其他问题',
}

export const BrandColorList = ['#8d3adb', '#e93fb2', '#ff8047', '#3f83fc']

export const AreaColorList = ['#fff6ef', '#faf6ff', '#f0f9ef', '#f1f8fe']

export const AfterSaleStatusList = ['已取消', '待审核', '已完成', '已拒绝', '已同意，待退货']

export const AfterSaleStatusIconList = ['warning', 'clock', 'checked', 'clear', 'logistics']

export const AfterSaleStatusEnum = {
  CANCEL: 0,
  PROCESSING: 1,
  REFUNDED: 2,
  REJECT: 3,
  CONFIRM: 4,
}

export const BusinessTypeEnum = {
  USER: 0, // 用户
  SHOP: 1, // 门店
  FACTORY: 2, // 商家
}

export const AfterSaleTypeEnum = {
  ONLY_REFUND: 0, // 仅退款
  RETURN_REFUND: 1, // 退货退款
  EXCHANGE: 2, // 换货
}
export const RefundReasonOption = [
  {value: 98, label: '7天无理由退换货'},
  {value: 1, label: '颜色/尺寸/参数不符'},
  {value: 2, label: '退运费'},
  {value: 3, label: '商品瑕疵'},
  {value: 4, label: '质量问题'},
  {value: 5, label: '少件/漏发'},
  {value: 6, label: '收货商品时有划痕或破损'},
  {value: 7, label: '假冒品牌'},
  {value: 8, label: '未按约定时间发货'},
  {value: 9, label: '发票问题'},
  {value: 99, label: '其他问题'},
]

export const AnchorRankEnum = {
  0: '带货榜',
  1: '人气榜',
  2: '地区榜',
  3: '新人榜',
}

export const GenderEnum = {
  0: {
    label: '',
    icon: 'woman',
    color: '#FF4A4A',
    backgroundColor: 'rgba(255,74,74,0.12)',
  },
  1: {
    label: '男',
    icon: 'man',
    color: '#333',
    backgroundColor: 'rgba(51,51,51,0.12)',
  },
  2: {
    label: '女',
    icon: 'woman',
    color: '#FF4A4A',
    backgroundColor: 'rgba(255,74,74,0.12)',
  },
}

export const CardTradeTypeList = [
  '微信支付充值收入',
  '充值卡充值收入',
  '充值赠送收入',
  '订单消费支付支出',
  '订单关闭退款收入',
  '订单售后退款收入',
  '门店消费付款支出',
  '系统赠送收入',
  '系统扣除支出',
  '直推奖励收入',
  '直推奖励扣除',
  '佣金转换成兑换余额收入',
  '兑换余额转账收入',
  '兑换余额转账支出',
]

export const DetailTime = {
  ALL: 0,
  DAY_DETAIL: 1,
  WEEK_DETAIL: 2,
  MONTH_DETAIL: 3,
  YEAR_DETAIL: 4,
}

export const IncomeTypeEnum = {
  WECHAT: '提现到微信零钱',
  ALIPAY: '支付宝转账',
  BANK: '银行卡',
}

export const OnePostTypeEnum = {
  PRODUCT: 0,
  POST: 1,
}

export const DetailEnum = [
  {
    index: 0,
    key: 0,
    title: '全部',
  },
  {
    index: 1,
    key: 1,
    title: '日明细',
  },
  {
    index: 2,
    key: 2,
    title: '周明细',
  },
  {
    index: 3,
    key: 3,
    title: '月明细',
  },
  {
    index: 4,
    key: 4,
    title: '年账单',
  },
]

export const ExchangeReasonOption = [
  {value: 98, label: '7天无理由换货'},
  {value: 1, label: '颜色/尺寸/参数不符'},
  {value: 3, label: '商品瑕疵'},
  {value: 4, label: '质量问题'},
  {value: 6, label: '收货商品时有划痕或破损'},
  {value: 99, label: '其他问题'},
]

export const AfterSaleTypeList = ['仅退款', '退货退款', '换货']

export const CloseReasonList = [
  '',
  '其他',
  '退货退款',
  '仅退款',
  '商品缺货',
  '订单异常',
  '因物流原因无法发货',
  '取消拼团',
]

export const ReservationList = ['待处理', '已沟通', '已接待', '已取消']
export const ReservationEnum = {
  PENDING: 0, // 待处理
  COMMUNICATE: 1, // 已沟通
  RECEPTION: 2, // 已接待
  CANCEL: 3, // 已取消
}
export const WithdrawStatusList = ['提现失败', '提现成功', '提现中', '拒绝提现']
export const DetailType = {
  PRODUCT: 0, //商品佣金"),
  CONSUME: 1, //消费佣金"),
  SECOND_PRODUCT: 2, //商品二级佣金"),
  SHARE: 3, //分享奖励"),
  SERVICE: 4, //团队服务奖"),

  MEMBER_BONUS: 5, //会员广告补贴"),
  PARTNER_BONUS: 6, //合伙人广告补贴"),
  SHAREHOLDER_BONUS: 7, //运营中心广告补贴"),

  MEMBER_SHARE_COMMISSION: 8, //会员直推业绩佣金"),
  PARTNER_SHARE_COMMISSION: 9, //合伙人直推业绩佣金"),
  SHAREHOLDER_SHARE_COMMISSION: 10, //运营中心直推业绩佣金"),

  PARTNER_GROUP_COMMISSION: 11, //合伙人个人直属团队发展业绩奖励佣金"),
  SHAREHOLDER_GROUP_COMMISSION: 12, //运营中心个人直属团队发展业绩奖励佣金"),

  MEMBER_L2_DIVIDENDS: 13, //白银会员分红"),
  MEMBER_L3_DIVIDENDS: 14, //白金会员分红"),
  MEMBER_L4_DIVIDENDS: 15, //钻石会员分红"),

  PARTNER_L2_DIVIDENDS: 16, //主管分红"),
  PARTNER_L3_DIVIDENDS: 17, //经理分红"),
  PARTNER_L4_DIVIDENDS: 18, //总监分红"),

  SHAREHOLDER_L2_DIVIDENDS: 19, //副总裁分红"),
  SHAREHOLDER_L3_DIVIDENDS: 20, //总裁分红"),
  SHAREHOLDER_L4_DIVIDENDS: 21, //董事分红"),

  SHOP_COMMISSION: 22, //单店分红"),

  MEMBER_L4_BONUS: 23, //晋级钻石会员奖励(元)"),
  PARTNER_L4_BONUS: 24, //晋级总监奖励(元)"),
  SHAREHOLDER_L4_BONUS: 25, //晋级董事奖励(元)"),
  COURIER_COMMISSION: 26, //省市区快递收件费"),
  SHAREHOLDER_INCOME_COMMISSION: 27, //运营中心收入提点"),
  REWARD_QUEUE_COMMISSION: 28, //免单补贴"),
  SHOP_ORDER: 29, //商户订单收入"),
  PROVINCE_DIVIDENDS: 30, //省级代理区域分红"),
  CITY_DIVIDENDS: 31, //市级代理区域分红"),
  AREA_DIVIDENDS: 32, //区级代理区域分红"),

  PROVINCE_REWARD_QUEUE_COMMISSION: 33, //省级代理免单补贴"),
  CITY_REWARD_QUEUE_COMMISSION: 34, //市级代理免单补贴"),
  AREA_REWARD_QUEUE_COMMISSION: 35, //区级代理免单补贴"),

  SHOP_RECOMMEND_BONUS: 36, //推荐门店业绩佣金"),
  MANAGE_ADD: 37, //管理员赠送佣金"),

  PARTNER_RECOMMEND_PARTNER_COMMISSION: 38, //合伙人推荐合伙人佣金"),
  SHAREHOLDER_RECOMMEND_PARTNER_COMMISSION: 39, //运营中心推荐合伙人佣金"),
  AREA_PARTNER_COMMISSION: 40, //区域中心发展合伙人佣金"),
  ANCHOR_COMMISSION: 41, //主播带货佣金"),
  PARTNER_ANCHOR_COMMISSION: 42, //合伙人享受主播收入佣金"),
  SHAREHOLDER_ANCHOR_COMMISSION: 43, //运营中心享受主播收入佣金"),
  AREA_ANCHOR_COMMISSION: 44, //区域中心享受主播收入佣金"),
  PARTNER_RANK_REWARD: 45, //讲师业绩月排行榜奖励"),
  AREA_MEMBER_COMMISSION: 46, //区域中心发展会员佣金"),
  BOSS_INVITE_COMMISSION: 47, //老板推荐佣金"),
  MEMBER_INVITE_COMMISSION: 48, //会员邀请奖励"),
  MEMBER_GROUP_COMMISSION: 49, //会员代理个人直属团队发展业绩奖励佣金
  DIRECTOR_COMMISSION: 50, // "联合创始人分红"),
  WITHDRAW: 101, // 提现支出
  LOTTERY: 102, // 抽奖红包收入
  MANAGE_SUB: 103, // 管理员扣除减少
}

export const CommissionTypeList = {
  0: '商品佣金',
  1: '消费佣金',
  2: '商品二级佣金',
  3: '分享奖励',
  4: '团队服务奖',

  5: '会员广告补贴',
  6: '合伙人广告补贴',
  7: '运营中心广告补贴',

  8: '会员直推业绩佣金',
  9: '合伙人直推业绩佣金',
  10: '运营中心直推业绩佣金',

  11: '合伙人个人直属团队发展业绩奖励佣金',
  12: '运营中心个人直属团队发展业绩奖励佣金',

  13: '白银会员分红',
  14: '白金会员分红',
  15: '钻石会员分红',

  16: '主管分红',
  17: '经理分红',
  18: '总监分红',

  19: '副总裁分红',
  20: '总裁分红',
  21: '董事分红',

  22: '单店分红',

  23: '晋级钻石会员奖励', //1
  24: '晋级总监奖励', //1
  25: '晋级董事奖励', //1
  26: '省市区快递收件费',
  27: '运营中心收入提点',
  28: '免单补贴',
  29: '商户订单收入',
  30: '省级代理区域分红',
  31: '市级代理区域分红',
  32: '区级代理区域分红',

  33: '省级代理免单补贴',
  34: '市级代理免单补贴',
  35: '区级代理免单补贴',

  36: '推荐门店业绩佣金',
  37: '管理员赠送佣金',

  38: '合伙人推荐合伙人佣金',
  39: '运营中心推荐合伙人佣金',
  40: '区域中心发展合伙人佣金',
  41: '主播带货佣金',
  42: '合伙人享受主播收入佣金',
  43: '运营中心享受主播收入佣金',
  44: '区域中心享受主播收入佣金',
  45: '讲师业绩月排行榜奖励',
  46: '区域中心发展会员佣金',
  47: '老板推荐佣金',
  48: '会员邀请奖励', //1
  49: '会员代理个人直属团队发展业绩奖励佣金',
  50: '联合创始人分红',

  101: '提现支出',
  102: '抽奖红包收入',
  103: '管理员扣除减少',
}

// export const CommissionStatusList = ['冻结中', '已发放', '因退款扣除', '管理员扣除']
export const MemberStateEnum = {
  LOW: 0, // 初级会员"),
  HIGH: 1, // 高级会员"), // 此级别暂时取消
  SUPER: 2, // 会员代理"),
}

export const MemberStateList = {
  0: '初级会员',
  1: '高级会员', // 此级别暂时取消
  2: '会员代理',
}

export const CouponTypeEnum = {
  ALL: 0, // 全场通用
  SPU: 1, // 指定商品SPU可用
}
export const InvoiceResultStatusList = ['开票中', '开票完成', '开票失败', '待开票']
export const InvoiceTypeList = ['电子普通发票', '增值税专用发票']
export const TitleTypeList = ['个人', '单位']

export const CoinProductTypeEnum = {
  EXCHANGE: 0, // 兑换
  LOTTERY: 1, // 抽奖
  LUCK_LOTTERY: 2,
  NINE_LOTTERY: 3,
  TURNTABLE_LOTTERY: 4,
  SCRATCH_CARD_LOTTERY: 5,
}
export const ServicesList = ['质量保证', '48小时发货', '七天退换', '正品保证', '假一赔十']

export const VerifyStatusEnum = {
  NOT_VERIFY: 0, // 未核销
  HAS_VERIFY: 1, // 已核销
}

export const VerifyStatusList = {
  0: '未核销',
  1: '已核销',
}

export const MeetingStatusEnum = {
  CANCEL: 0, // 已取消
  SIGN: 1, // 已报名
}
export const MeetingStatusList = {
  0: '已取消',
  1: '已报名',
}

export const ProductType = {
  FREE: 0, // 免单商品
  BUSINESS: 1, // 商家商品
  EXCHANGE: 2, // 兑换商品
  ORDINARY: 3, // 常规商品
  COMMISSION: 4, // 佣金商品
}

export const CustomPageDataTypeOption = [
  {value: 0, label: '纯展示'},
  {value: 1, label: '跳转链接'},
  {value: 2, label: '商品'},
  {value: 3, label: '优惠券'},
]

export const CustomPageDataTypeEnum = {
  SHOW: 0,
  REDIRECT: 1,
  PRODUCT: 2,
  COUPON: 3,
  TO_CART: 4,
  GET_COUPON: 5,
  SWIPE: 6,
}
export const CustomPageDataTypeList = ['纯展示', '跳转链接', '商品', '优惠券']

export const PlatformTypeEnum = {
  MERCHANT: 0,
  PLATFORM: 1,
}

export const SelectColorList = [
  ['#fa8141', '#FD022C'],
  ['#391E0D', '#6D3C17'],
  ['#FF757A', '#FF2D3C'],
  ['#FFC275', '#FF852D'],
  ['#0DC6B4', '#35EB89'],
]

export const PayStatusEnum = {
  0: '未付款',
  1: '已取消',
  2: '已付款',
  3: '待评价',
  4: '已完成',
  5: '已关闭',
}

export const AppointmentList = ['待使用', '已核销']

export const ClassificationList = ['A类', 'B类', 'C类', 'D类']

export const PrizeTypeEnum = {
  PRIZE: 0,
  COIN: 1,
  THANKS: 2,
  LUCKY: 3,
}

export const PrizeTypeList = ['奖品', '游币', '谢谢参与', '红包']

const SharePlatform = {
  QQ: 0,
  SINA: 1,
  WECHAT: 2,
  WECHATMOMENT: 3,
  QQZONE: 4,
  FACEBOOK: 5,
}

export const Regional = {
  VIP: 0, // 会员线
  PARTNER: 1, // 合伙人线
  SHAREHOLDER: 2, // 董事线
}

export const IdentityTypeList = {
  0: '会员',
  1: '合伙人',
  2: '运营中心',
}

export const BrowseStatusEnum = {
  PENDING: 0, // 待审核
  DRAFT: 3, // 保存草稿
}

export const MemberTypeEnum = {
  0: '用户',
  1: '合伙人',
  2: '董事',
}

export const IncomeType = {
  10: '副总裁',
  11: '总裁',
  12: '股东',
  19: '副总裁',
  20: '总裁',
  21: '股东',
}

export const UserCommissionTypeList = [
  '商品佣金',
  '消费佣金',
  '商品二级佣金',
  '分享奖励',
  '团队服务奖',

  '会员广告补贴',
  '合伙人广告补贴',
  '运营中心广告补贴',

  '会员直推业绩佣金',
  '合伙人直推业绩佣金',
  '运营中心直推业绩佣金',

  '合伙人个人直属团队发展业绩奖励佣金',
  '运营中心个人直属团队发展业绩奖励佣金',

  '白银会员分红',
  '白金会员分红',
  '钻石会员分红',

  '主管分红',
  '经理分红',
  '总监分红',

  '副总裁分红',
  '总裁分红',
  '董事分红',

  '单店分红',

  '晋级钻石会员奖励',
  '晋级总监奖励',
  '晋级董事奖励',
  '省市区快递收件费',
  '运营中心收入提点',
  '免单补贴',
  '商户订单收入',
  '省级代理区域分红',
  '市级代理区域分红',
  '区级代理区域分红',

  '省级代理免单补贴',
  '市级代理免单补贴',
  '区级代理免单补贴',

  '推荐门店业绩佣金',
  '管理员赠送佣金',

  '合伙人推荐合伙人佣金',
  '运营中心推荐合伙人佣金',
  '区域中心发展合伙人佣金',
  '主播带货佣金',
  '合伙人享受主播收入佣金',
  '运营中心享受主播收入佣金',
  '区域中心享受主播收入佣金',
  '讲师业绩月排行榜奖励',
  '区域中心发展会员佣金',
  '老板推荐佣金',
  '会员邀请奖励',
]

export const CommissionStatusList = ['等待提现', '已发放', '因退款扣除', '管理员扣除']

export const BillMenuEnum = [
  {
    name: '全部',
    value: [],
    index: '',
  },
  {
    name: '会员直推佣金',
    value: [8],
    index: 8,
  },
  {
    name: '合伙人直推佣金',
    value: [9],
    index: 9,
  },
  {
    name: '运营中心直推佣金',
    value: [10],
    index: 10,
  },
  {
    name: '合伙人团队业绩佣金',
    value: [11],
    index: 11,
  },
  {
    name: '运营中心团队管理佣金',
    value: [12],
    index: 12,
  },
  {
    name: '免单补贴',
    value: [28],
    index: 28,
  },
  {
    name: '商家订单收入',
    value: [29],
    index: 29,
  },
  {
    name: '会员所有分红',
    value: [13, 14, 15],
    index: 13,
  },
  {
    name: '合伙人所有分红',
    value: [16, 17, 18],
    index: 16,
  },
  {
    name: '老板推荐佣金',
    value: [47],
    index: 47,
  },
  {
    name: '提现支出',
    value: [101],
    index: 101,
  },
]
export const GoodsOrderStatusList = ['待付款', '已付款', '已退款', '已取消']
export const GoodsOrderStatusEnum = {
  UNPAY: 0, // 待付款
  PAID: 1, // 已付款
  REFUND: 2, // 已关闭
  CANCEL: 3, // 已取消
}
export const TimeType = {
  DAY: 0, // 天
  WEEK: 1, // 周
  MONTH: 2, // 月
  YEAR: 3, // 年
}

export const PayTypeEnum = {
  WECHAT: 0, // 微信"),
  ALIPAY: 1, // 支付宝"),
  BANK: 2, // 银联云闪付"),
  POINT: 3, // "积分支付"),
  ZHAOSHANG: 4, // 招商银行"),
  APPLE_PAY: 5, //"apple支付")
}

export const TemplateTypeEnum = {
  TEMPLATE: 0, // 普通模版
  FONT: 1, // 文字模版
}

export const fileFormatOption = [
  {label: '全部', value: ''},
  {label: '横版', value: 0},
  {label: '竖版', value: 1},
  {label: '长图', value: 2},
  {label: '方形', value: 3},
]

export const PayClientEnum = {
  PC: 0, // PC"),
  MOBILE_H5: 1, // 手机浏览器"),
  WECHAT_H5: 2, // 微信H5"),
  APPLET: 3, // 小程序"),
  APP: 4, // APP")
}
export const BannerEnum = {
  HOME: 0,
  HOME_MIDDLE: 1,
  HOME_BOTTOM: 2,
  HUGE: 3,
  TOPIC: 4,
  MOBILE: 5,
  DESIGN: 6,
  H5_DESIGN: 7,
}

export const TypeOfOrdersEnum = {
  ORDER: 0, // 购买
  BOOKING: 1, // 订货
}

export const PayTypeList = ['微信支付', '支付宝', '银联云闪付', '积分支付', '招商银行', 'apple支付']

export const TimeList = ['全部', '今天', '昨天', '近七天', '近30天']

export const OrderKindList = ['免单商品订单', '商家商品订单', '兑换商品订单', '常规商品订单', '佣金商品订单']

export const ShopOrderStatusList = ['待付款', '已取消', '待服务', '待评价', '已完成', '已关闭']
export const ShopOrderStatusListImage = ['send', 'checkout', 'phone', 'send', 'checkout', 'checkout']

export const AppointmentEnum = {
  ON: 0, // 未核销
  OFF: 1, // 已核销
}

export const BusinessOrderStatusList = ['待付款', '已取消', '已付款', '待评价', '已完成', '已关闭']
export const BusinessOrderStatusListImage = ['send', 'checkout', 'send', 'send', 'checkout', 'checkout']
export const BusinessOrderStatusMap = {
  0: '待付款',
  1: '已取消',
  2: '已付款',
  3: '待评价',
  4: '已完成',
  5: '已关闭',
}

export const UserRoleEnum = {
  ROLE_CUSTOMER: 1, // 消费者
  ROLE_SHOP: 2, // 店长
  ROLE_MANAGER: 3, // 代理商经理
  ROLE_CLERK: 4, // 店员
  ROLE_SELLER: 5, // 分销员
}

export const RewardTypeEnum = {
  SPU: 0,
  SHAREHOLDER_L4: 1,
  PROVINCE: 2,
  CITY: 3,
  AREA: 4,
  MEMBER_L4: 5,
  PARTNER_L4: 6,
  MEMBER_INVITE: 8,
}

export const RewardTypeList = [
  '商品免单补贴',
  '晋级主席奖励',
  '省级代理免单补贴',
  '市级代理免单补贴',
  '区级代理免单补贴',
  '晋级钻石会员奖励',
  '晋级董事奖励',
  '晋级首席官奖励',
  '会员新人邀请奖励',
]
export const BalanceTypeList = ['收入', '开支']

export const CoinProductTypeList = ['兑换', '抽奖', '幸运抽奖', '九宫格抽奖', '大转盘', '刮刮卡']

export const AgentEnum = {
  WAIT_AUDIT: 0, //待审核
  PASS: 1, //审核通过
  REFUSE: 2, //审核拒绝
  CANCEL: 3, //取消
}

export const AgentList = {
  0: '待审核',
  1: '审核通过',
  2: '审核拒绝',
  3: '已取消',
}
export const FileTypeList = ['图片', '视频', '设计文件']
export const BalanceFlowTypeList = ['佣金收入', '提现支出', '抽奖红包收入']
export const FileTypeEnum = {
  PICTURE: 0, // "图片"
  VIDEO: 1, // "视频"
  DESIGN_FILE: 2, // "设计文件"
}

export const TradeList = [
  '微信支付充值收入',
  '充值卡充值收入',
  '充值赠送收入',
  '订单消费支付支出',
  '订单关闭退款收入',
  '订单售后退款收入',
  '门店消费付款支出',
  '系统赠送收入',
  '系统扣除支出',
  '直推奖励收入',
  '直推奖励扣除',
  '佣金转换成兑换余额收入',
  '兑换余额转账收入',
  '兑换余额转账支出',
]

export const BillEnum = {
  INCOME: 0, // 收入
  SPENDING: 1, // 支出
}

export const IdentityTypeEnum = {
  MEMBER: 0, // 会员
  PARTNER: 1, // 合伙人
  SHAREHOLDER: 2, // 运营中心
}

export const UserLevelList = ['', '水晶会员L1', '黄金会员L2', '白金会员L3', '钻石会员L4', '至尊会员L5']

export const UserLevelEnum = {
  CUSTOMER: 0, // 初级用户"),

  MEMBER_L1: 1, // 会员"),
  MEMBER_L2: 2, // 白银会员"),
  MEMBER_L3: 3, // 白金会员"),
  MEMBER_L4: 4, // 钻石会员"),

  PARTNER_L1: 5, // 合伙人"),
  PARTNER_L2: 6, // 主管"),
  PARTNER_L3: 7, // 经理"),
  PARTNER_L4: 8, // 总监"),

  SHAREHOLDER_L1: 9, // 运营中心"),
  SHAREHOLDER_L2: 10, // 副总裁
  SHAREHOLDER_L3: 11, // 总裁"),
  SHAREHOLDER_L4: 12, // 董事"),
}

export const ShopOrderStatusEnum = {
  UNPAY: 0, // 待付款
  CANCEL: 1, // 已取消
  PAID: 2, // 已付款
  COMMENT: 3, // 待评价
  DONE: 4, // 已完成
  CLOSE: 5, // 已关闭
}

export const VoucherTypeImageList = [
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/miaoshaka%402x.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/kanjiaka%402x.png',
  'https://hipo.oss-cn-hangzhou.aliyuncs.com/resource/hipo/hudongka%402x.png',
]

export const RtcRole = {
  /**
   * DEPRECATED. Role_Attendee has the same privileges as Role_Publisher.
   */
  Role_Attendee: 0,
  /**
   *    RECOMMENDED. Use this role for a voice/video call or a live broadcast, if your scenario does not require authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in).
   */
  Role_Publisher: 1, // 主播
  /**
   * Only use this role if your scenario require authentication for [Hosting-in](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#hosting-in).
   *
   * @note In order for this role to take effect, please contact our support team to enable authentication for Hosting-in for you. Otherwise, Role_Subscriber still has the same privileges as Role_Publisher.
   */
  Role_Subscriber: 2, // 观众
  /**
   * DEPRECATED. Role_Attendee has the same privileges as Role_Publisher.
   */
  Role_Admin: 101,
}

export const NewShopTypeEnum = {
  BUSINESS: 0, // 门店
  PRODUCER: 1, // 商家
}

export const AllIdentityTypeEnum = {
  MEMBER: 0, // 会员
  PARTNER: 1, // 合伙人
  SHAREHOLDER: 2, // 运营中心
  ANCHOR: 10, // 主播
  AGENT: 11, // 区域中心
  TEACHER: 12, // 讲师
  RECOMMEND: 13, // 好物推荐官
  BOSS: 14, // 老板
}

export const AllIdentityTypeList = [
  {
    value: 0,
    label: 'VIP会员',
  },
  // {
  //   value: 15,
  //   label: 'VIP会员',
  // },
  {
    value: 1,
    label: '合伙人',
  },
  {
    value: 2,
    label: '运营中心',
  },
  {
    value: 11,
    label: '区域中心',
  },
  // {
  //   value: 11,
  //   label: '大区中心',
  // },
  {
    value: 10,
    label: '主播',
  },
  {
    value: 14,
    label: '老板',
  },
  {
    value: 16,
    label: '联合创始人',
  },
]

export const AllIdentityTypeMap = {
  0: '会员',
  1: '合伙人',
  2: '运营中心',
  // 3: '老板',
  10: '主播',
  11: '区域中心',
  14: '老板',
  // 15: 'VIP会员',
  16: '联合创始人',
}

export const ArticleEffectOption = [
  {value: 'SERVICE_AGREEMENT', label: '用户服务协议'},
  {value: 'PRIVACY_AGREEMENT', label: '用户隐私协议'},
]

export const ArticleEffectEnum = {
  SERVICE_AGREEMENT: 'SERVICE_AGREEMENT',
  PRIVACY_AGREEMENT: 'PRIVACY_AGREEMENT',
}

export const ArticleEffectMap = {
  SERVICE_AGREEMENT: '用户服务协议',
  PRIVACY_AGREEMENT: '用户隐私协议',
}

export const CatalogList = [
  {
    value: 0,
    title: '重要通知',
  },
  {
    value: 1,
    title: '订单通知',
  },
  {
    value: 2,
    title: '店铺通知',
  },
  {
    value: 3,
    title: '其他通知',
  },
]
export const NoticeEnum = {
  IMP: 0,
  ORDER: 1,
  STORE: 2,
  OTHER: 3,
}

export const TemplateCatalogEnum = {
  0: '重要通知',
  1: '订单通知',
  2: '店铺通知',
  3: '其他通知',
}

export const RefundStatusMap = {
  0: '未退款',
  1: '申请退款中',
  2: '已全额退款',
  3: '已部分退款',
  4: '已拒绝退款',
}

export const RefundStatusEnum = {
  NOT_REFUND: 0,
  APPLY_REFUND: 1,
  FULL_REFUND: 2,
  PART_REFUND: 3,
  REJECT_REFUND: 4,
}

export const AnchorLevelMap = {
  0: '非主播',
  1: '素人主播',
  2: '达人主播',
  3: '官方主播',
}

export const AnchorLevelEnum = {
  NOT_ANCHOR: 0,
  ONE: 1,
  TWO: 2,
  THREE: 2,
}

export const AnotherPayList = {
  0: '待支付',
  1: '支付成功',
  2: '已退全款',
  3: '部分退款',
}

export const CardTradeTypeEnum = {
  // 收支类型 0 收入 1 支出
  TOP_UP: 0, // 0, "微信支付充值收入"),
  RECHARGE_CARD: 1, // 0, "充值卡充值收入"),
  GIVING: 2, // 0, "充值赠送收入"),
  PAY: 3, // 1, "订单消费支付支出"),
  CLOSE_ORDER: 4, // 0, "订单关闭退款收入"),
  REFUND: 5, // 0, "订单售后退款收入"),
  SHOP: 6, // 1, "门店消费付款支出"),
  SYSTEM_GIVING: 7, // 0, "系统赠送收入"),
  SYSTEM_DEDUCT: 8, // 1, "系统扣除支出"),
  DIRECT_RECOMMEND_REWARD: 9, // 0, "直推奖励收入"),
  DIRECT_RECOMMEND_REFUND: 10, // 1, "直推奖励扣除"),
  POINT_TO_CARD_POINT: 11, // 0,"佣金转换成兑换余额收入"),
  TRANSFER_ACCOUNTS_REWARD: 12, //0,"兑换余额转账收入"),
  TRANSFER_ACCOUNTS_REFUND: 13, //1,"兑换余额转账支出"),
}

export const SpuAuditStatusList = ['待审核', '审核通过', '审核驳回']

export const CategoryTypeEnum = {
  FRONT: 0,
  BACK: 1,
}

export const ShopLevelList = {
  0: '官方优品店',
  1: '官方品质店',
  2: '官方明星店',
  3: '设计师店',
  4: '品牌创意店',
}
