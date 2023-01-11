import fly from './fly'
import article from './children/article'
import lottery from './children/lottery'
import admin from './children/admin'
import afterSale from './children/after-sale'
// import auth from './children/auth'
import category from './children/category'
import coin from './children/coin'
import common from './children/common'
import fund from './children/fund'
import home from './children/home'
import invoice from './children/invoice'
import marketing from './children/marketing'
import order from './children/order'
import product from './children/product'
// import recommend from './children/recommend'
import user from './children/user'
import web from './children/web'
// import application from './children/application'
// import store from './children/store'
// import mine from './children/mine'
import shop from './children/shop'
import video from './children/video'
import room from './children/room'
import anchor from './children/anchor'
// import staff from './children/staff'
// import merchant from './children/merchant'
// import blog from './children/blog'
import farm from './children/farm'
import meeting from './children/meeting'

export default fly.inject({
  admin,
  afterSale,
  article,
  // auth,
  farm,
  category,
  coin,
  common,
  fund,
  lottery,
  home,
  invoice,
  marketing,
  order,
  product,
  // recommend,
  user,
  // application,
  web,
  // store,
  // mine,
  shop,
  video,
  room,
  anchor,
  // staff,
  // merchant,
  // blog,
  meeting,
})
