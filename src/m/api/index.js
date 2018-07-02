/**
 * Created by ebi on 2017/5/11.
 */
import fetch from './fetch'

export const commonApi = {
  getUserInfo () {
    return fetch('/web/api/user/userInfo/v1')
  },
  getCity (optimize = 1) {
    return fetch('/web/api/area/allAreaTree/v1', {optimize})
  },
  getHotCity () {
    return fetch('/web/api/area/hotArea/v1')
  },
  getCityByLocationOrIp ({lat = 0, lng = 0} = {}) {
    return fetch('/web/api/position/v1', {lat, lng})
  },
  getWechatAuthorize (code = '') {
    return fetch('/web/api/jiuji/weixin/isAuthority/v1', {code})
  },
  getWechatConfig (url = '') {
    return fetch('/web/api/jiuji/weixin/getShareSignInfo/v1', {url})
  },
  home ({label = 0, page = 1, random = 0} = {}) {
    return fetch('/web/api/floors/v1', {label, page, random})
  },
  homeGuess () {
    return fetch('/web/api/floors/specialEnjoy/v1')
  },
  remindRush (phone = '', id = 0) {
    return fetch('/web/api/querecord/remindSnap/v1', {phone, id}, 'post')
  },
  cityFeature (lat = 0, lng = 0) {
    return fetch('/web/api/localService/localShopAndTopGoods/v1', {lat, lng})
  }
}
export const acountApi = {
  sendDynamicCode (params = {phone: '', verify: ''}) {   // 发送动态密码
    return fetch('/web/api/dynamicPwdSms/v1', params, 'post')
  },
  login ({username = '', password = '', verify = '', openId = '', unionId = ''} = {}) {
    return fetch('/web/api/user/login/v1', {username, password, verify, openId, unionId}, 'post')
  },
  logout () {
    return fetch('/web/api/member/outLogin/v1', {}, 'post')
  },
  oldLogout () { // todo 兼容老主站的退出登录，改版完成之后干掉
    return fetch('/api/common.aspx?act=logout', {}, 'post')
  },
  registerCode (params = {mobile: '', imgCode: ''}) {  // 手机号获取验证码
    return fetch('/web/api/user/registerSendVerify/v1', params, 'get')
  },
  registerVerification (params = {mobile: '', SMSCode: ''}) {  // 手机验证验证码
    return fetch('/web/api/user/registerVerification/v1', params, 'get')
  },
  register (params = {mobile: '', SMSCode: '', password: '', openId: ''}) {  // 注册
    return fetch('/web/api/user/register/v1', params, 'post')
  },
  qqBindAccount (params = {type: '', username: '', password: '', bindType: '', openId: '', unionId: ''}) {
    return fetch('/web/api/user/qqOrWeixinBind/v1', params, 'post')
  },
  getPhoneAndEmail (params = {userName: '', imgCode: ''}) {
    return fetch('/web/api/user/getPhoneAndEmail/v1', params, 'post')
  },
  sendVerify (params = {type: '', sendVerify: ''}) {
    return fetch('/web/api/user/sendVerify/v1', params, 'post')
  },
  checkVerifyCode (params = {type: '', validCode: '', userName: ''}) {  // 短信验证码验证
    return fetch('/web/api/user/checkVerifyCode/v1', params, 'post')
  },
  updatePwd (params = {validCode: '', type: '', mobile: '', mail: '', password: ''}) {
    return fetch('/web/api/user/updatePwd/v1', params, 'post')
  },
  qqIsBind (params = {type: '', openId: '', unionId: ''}) {
    return fetch('/web/api/user/qqOrWeixinLogin/v1', params, 'post')
  }
}
export const newsApi = {
  newsDetail (newsId = 12812) {
    return fetch('/web/api/NewsComment/newsDetail/v1', {newsId})
  },
  getComments ({id = 12812, page = 1, size = 10} = {}) {    //  资讯页获取评论列表
    return fetch('/web/api/NewsComment/getComments/v1', {id, page, size})
  },
  getReplays (parentId = 0, page = 1, size = 10) {    //  获取评论的回复列表
    return fetch('/web/api/NewsComment/getReplies/v1', {parentId, page, size})
  },
  SendComment (params = {}) {    //  评论提交
    return fetch('/web/api/NewsComment/addComment/v1', params, 'post')
  },
  addPraise (commentId = 0) {
    return fetch('/web/api/NewsComment/addZan/v1', {commentId}, 'post')
  },
  NewsAddZan (newsId = 6356) {
    return fetch('/web/api/NewsComment/NewsAddZan/v1?', {newsId}, 'post')
  }
}
export const productApi = {
  getSearchHistory (history = '') {
    return fetch('/web/api/search/hotAndHistorySearch/v1', {history})
  },
  getSearchGuess (keyword = '', count = 0) {
    return fetch('/web/api/search/recommendSearch/v1', {keyword, count})
  },
  deleteSearchHistory () {
    return fetch('/web/api/search/deleteHistory/v1', {}, 'post')
  },
  category () {
    return fetch('/web/api/products/category/v1')
  },
  list (params = {}) {
    return fetch('/web/api/products/v1', params, 'get')
  },
  detailStatic (ppid = 0) {
    return fetch('/web/api/sc/products/getDetailStatic/v1', {ppid}, 'get')
  },
  detailCity (ppid = 0) {
    return fetch('/web/api/cc/products/productCityDetail/v1', {ppid}, 'get')
  },
  detailNoCache (ppid = 0, position = '', cityId = 0, addressId = 0) {
    return fetch('/web/api/nc/products/getDetailNotCache/v1', {ppid, position, cityId, addressId}, 'get')
  },
  commentLike (id = 0) {
    return fetch('/web/api/reviews/upVote/v1', {id}, 'post')
  },
  detailData (ppid = 0, position = '') {
    return fetch('/web/api/nc/products/detailIntroduction/v1', {ppid, position}, 'get')
  },
  collectGoods (ppids = 0) {
    // 收藏商品
    return fetch('/web/api/products/collectGoods/v1', {ppids}, 'post')
  },
  commentsData (params = {}) {
    // 评论列表
    return fetch('/web/api/nc/products/proComments/v1', params, 'get')
  },
  commentDetail (params = {}) {
    // 查看评论
    return fetch('/web/api/reviews/getByReviewId/v1', params, 'get')
  },
  submitReply (params = {}) {
    // 提交回复
    return fetch('/web/api/reviews/commitReply/v1', params, 'post')
  },
  isRegister (phone = '') {
    // 检测手机号是否注册
    return fetch('/web/api/user/phoneIsRegister/v1', {phone}, 'get')
  },
  sendMsgCode (phone = '') {
    // 发送短信验证码
    return fetch('/web/api/user/simpleRegister/v1', {phone}, 'post')
  },
  depreciateTip (params = {}) {
    // 降价通知
    return fetch('/web/api/products/priceReduction/v1', params, 'post')
  },
  arrivalTip (params = {}) {
    // 到货通知
    return fetch('/web/api/products/cargoNotice/v1', params, 'post')
  },
  brandList (categoryId) {
    // 分类下品牌列表
    return fetch(`/web/api/brand/cid/${categoryId}/v1`, {}, 'get')
  },
  brandProduct (categoryId, brandId) {
    // 品牌下商品列表
    return fetch('/web/api/brand/products/v1', {categoryId, brandId}, 'get')
  },
  productPriceTrend (ppid) {
    // 商品价格趋势
    return fetch('/web/api/cc/products/productPriceTrend/v1', {ppid}, 'get')
  },
  sku (ppid, diy) {
    // 商品价格趋势
    return fetch('/web/api/sc/products/changeSpec/v1', {ppid, diy}, 'get')
  },
  addCart (params = {}) {
    // 加入购物车
    return fetch('/web/api/tmpBasket/buy/v1', params, 'post')
  },
  order (ppid = 0) {
    // 预约购买
    return fetch('/web/api/products/yuYueProduct/v1', {ppid}, 'post')
  },
  preferential (productId = 0, ppid = 0) {
    // 优惠购
    return fetch('/web/api/groupBuy/list/v1', {productId, ppid}, 'get')
  },
  getCoupon (ruleCode) {
    // 领取优惠劵
    return fetch('/web/api/products/sendCouponCode/v1', {ruleCode}, 'post')
  },
  getGiftFromSearchPage (word = '') {
    return fetch('/event/eventapi.aspx?act=loadSearchGift', {word})
  },
  sendSearchGift (word = '', ruleId = '') {
    return fetch('/event/eventapi.aspx?act=sendSearchGift', {word, ruleId})
  },
  getConsultPublic (ppid = '', page = '', pageSize = '') {
    return fetch('/web/api/consults/getProductConsultByPpid/v1', {ppid, page, pageSize})
  },
  getConsultPrivate (page = '', pageSize = '') {
    return fetch('/web/api/consults/getByUser/v1', {page, pageSize})
  },
  getDetails (id = '') {
    return fetch('/web/api/consults/detail/v1', {id})
  },
  postAsk (ppid = '', consultId = '', content = '') {
    return fetch('/web/api/consults/add/v1', {ppid, consultId, content}, 'post')
  }
}
export const tradeApi = {
  getCart () {
    return fetch('/web/api/tmpBasket/list/v1')
  },
  updateCount (basketId = 0, count = 1) {
    return fetch('/web/api/tmpBasket/update/v1', {basketId, count}, 'post')
  },
  deleteCart (basketId = 0) {
    return fetch('/web/api/tmpBasket/delete/v1', {basketId}, 'post')
  },
  buyService ({act = 'buy', basketId = 0, serviceId = 0}) {
    return fetch('/web/api/tmpBasket/service/v1', {act, basketId, serviceId}, 'post')
  },
  buyPacking ({act = 'buy', basketId = 0, packingId = 0, greetingCardFrom = '', greetingCardTo = '', greetingCardContent = ''}) {
    return fetch('/web/api/tmpBasket/bind/v1', {
      act,
      basketId,
      packingId,
      greetingCardFrom,
      greetingCardTo,
      greetingCardContent
    }, 'post')
  },
  addCart ({ppid = 0, count = 1}) {
    return fetch('/web/api/tmpBasket/add/v1', {ppid, count}, 'post')
  },
  confirm (type = '', id = 0, position = '') {
    return fetch(`/web/api/order/confirm/${type}/${id}/v1`, {type, id, position})
  },
  stock ({ppids = '', type = '', shopId = 0, addressId = 0, orderType = 'cart', orderId = 0}) {
    return fetch('/web/api/order/stock/v1', {ppids, type, shopId, addressId, orderType, orderId})
  },
  getAddressList () {
    return fetch('/web/api/order/getAddress/v1')
  },
  editAddress (params = {}) {
    return fetch('/web/api/order/editAddress/v1', params, 'post')
  },
  submitOrder (params = {}) {
    return fetch('/web/api/order/submitOrder/v1', params, 'post')
  },
  pay (type = '', id = 0) {
    return fetch('/web/api/order/paymentMethod/v1', {type, id})
  },
  getSubToken (orderid = '') {
    return fetch('/web/api/order/subToken', {orderid})
  },
  getWechatPayUrl ({type = 1, id = 0, price = 0, openId = ''}) {
    return fetch(`/notifypay/smq/ashx/request.ashx?method=submitOrderInfo&sub_id=${id}&price=${price}&payType=${type}&interfaceType=3&subopenid=${openId}&payFlag=1`)
  },
  getCounterData (type = '', id = 0) {
    return fetch('/web/api/order/counter/v1', {type, id})
  },
  getPayResult (type = '', id = 0) {
    return fetch('/web/api/order/OrderCallback/v1', {type, id})
  },
  isSetPayPassword () { // 查询是否设置过支付密码
    return fetch('/web/api/order/checkHavePayPwd/v1')
  },
  getStoreList (params = {}) { // 获取门店列表
    return fetch('/web/api/cityService/cityAndNearStore/v1', params)
  },
  editCoupon (params = {}) { // 添加/查询优惠券
    return fetch('/web/api/order/queryYouHuiMaList', params)
  }
}
export const memberApi = {
  index () {
    return fetch('/web/api/member/index/v1?v=' + Math.random())
  },
  deviceRecommend (productId = 0, from = '') {
    return fetch('/web/api/floors/chooseForYou/v1', {productId, from})
  },
  getMyFace () { // 人脸识别图
    return fetch('/web/api/user/face/v1')
  },
  uploadFace (form) {
    return fetch('/web/api/user/faceUpload/v1', form, 'post', 'payload')
  },
  getVoucherData (params = {code: ''}) {
    return fetch('/web/api/member/getECertificate/v1', params, 'get')
  },
  getCouponProduct (params = {coupon: ''}) {
    return fetch('/web/api/youhuima/getProducts/v1', params, 'get')
  },
  getAddress () {
    return fetch('/web/api/member/myAddress')
  },
  deleteAddress (id = 0) {
    return fetch('/web/api/member/deletAddress', {id}, 'post')
  },
  getAddressById (id = 0) {
    return fetch('/web/api/member/getOneAddress', {id})
  },
  getStreet (cityId = 0) {
    return fetch('/web/api/member/getstreet', {cityId})
  },
  suggestAddress (cityId = 0, keyword = '') {
    return fetch('/web/api/member/getAddressByKeyword', {cityId, keyword})
  },
  getStreetByPosition (latitude = '', longitude = '') {
    return fetch('/web/api/member/getStreetByPosition', {latitude, longitude})
  },
  editAddress (params = {}) {
    return fetch('/web/api/member/editAddress', params, 'post')
  },
  setDefault (id = 0) {
    return fetch('/web/api/member/defaultAddress', {id}, 'post')
  },
  getCoupon () {
    return fetch('/web/api/youhuima/getYouHuiMaList/v1')
  },
  addCoupon (code = '') {
    return fetch('/web/api/youhuima/addYouHuiMa/v1', {code}, 'post')
  }
}
export const storeApi = {
  getStoreList (act = 'nearStore') {
    return fetch('/web/api/cityService/store/v1', {act})
  },
  getNearStoreList (lat = 0, lng = 0) {
    return fetch('/web/api/cityService/nearStore/v1', {lat, lng})
  }
}
export const littleShopApi = {
  statistics (shopId = 0, page = '') {
    return fetch('/api/OEMShop.aspx?act=stat', {shopId, page}, 'post')
  },
  shopUV () {
    return fetch('/api/OEMShopMgr.aspx?act=shopUV&v=' + Date.now())
  },
  apply () {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getzitiApplyInfo&v=' + Date.now())
  },
  applySubmit (params = {}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=addzitiApply', params, 'post')
  },
  uploadImg (params, act) {
    let type = (act === 'form' ? 'formData' : 'payload')
    return fetch('/api/data.ashx?act=upFile', params, 'post', type)
  },
  feedback (comment = '', files = '') {
    return fetch('/notifypay/webApi/smallShop.aspx?act=shopSuggestAdd', {comment, files}, 'post')
  },
  feedbackList (page = 1, rows = 20) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=shopSuggestView', {page, rows})
  },
  getProductList ({cateId = 0, page = 0}) {
    return fetch('/api/OEMShop.aspx?act=list', {cateId, page})
  },
  getManageProductList ({cateId = 0, page = 0}) {
    return fetch('/api/OEMShopMgr.aspx?act=list', {cateId, page})
  },
  getShopInfo (shopId = '') {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getSmallShopInfo&v=' + Date.now(), {shopId})
  },
  search (keyword = '', page = 1) {
    return fetch('/api/OEMShop.aspx?act=search', {keyword, page})
  },
  manageSearch (keyword = '', page = 1) {
    return fetch('/api/OEMShopMgr.aspx?act=search', {keyword, page})
  },
  getShopProduct (ppid = '') {
    return fetch('/api/OEMShop.aspx?act=product', {ppid})
  },
  getSku (ppid = '', coll = '') {
    return fetch('/api/OEMShop.aspx?act=productRelation', {ppid, coll})
  },
  getManageSku (ppid = '', coll = '', shopId = '') {
    return fetch('/api/OEMShopMgr.aspx?act=productRelation', {ppid, coll, shopId})
  },
  submitWish ({ppid = '', count = 1, name = '', phone = '', area = '', address = '', backup = '', shopId = '', giftId = '', giftType = 0, coll = ''}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=addWishList', { ppid, count, name, phone, area, address, backup, shopId, giftId, giftType, coll }, 'post')
  },
  getCart () {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getSmallShopCart&v=' + Date.now())
  },
  addCart ({ppid = 0, count = 1, giftId = '', giftType = 0, coll = ''}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=addSmallShopCart', {ppid, count, giftId, giftType, coll}, 'post')
  },
  updateCartCount (id = 0, count = 1) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=udpateSmallShopCart', {id, count}, 'post')
  },
  deleteCart (id = 0) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=delSmallShopCart', {id}, 'post')
  },
  getWishList ({type = 0, page = 1}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getWishList&v=' + Date.now(), {type, page})
  },
  deleteWish (id = 0) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=delSmallShopCart', {id}, 'post')
  },
  confirmWishOrderFinish (id = 0) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=ConfirmWishOrder', {id}, 'post')
  },
  getMyShopInfo () {
    return fetch('/notifypay/webApi/smallShop.aspx?act=validtIfIsSmallShop&v=' + Math.random())
  },
  getMaterielList ({type = 0, page = 1, keyword = ''}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getShopFielList&v=' + Math.random(), {type, page, keyword})
  },
  getMaterielDetail (id = 0) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=getShopFielInfo&v=' + Math.random(), {id})
  },
  getShopDataList () {
    return fetch('/notifypay/webApi/smallShop.aspx?act=ShopSaleReport&v=' + Math.random())
  },
  getShopData ({id, year, month}) {
    return fetch('/notifypay/webApi/smallShop.aspx?act=ShopSaleSingleReport&v=' + Math.random(), {id, year, month})
  }
}
export const afterServiceApi = {
  getIndexAd () {
    return fetch('/web/api/afterService/indexAd/v1')
  },
  goodsList () {
    return fetch('/web/api/afterService/goodsList/v1')
  },
  getBrand () {
    return fetch('/web/api/afterService/brand/v1')
  },
  getMalfunction (params) {
    return fetch('/web/api/afterService/accessories/v1', params)
  },
  getModel (params = {brandId: ''}) {
    return fetch('/web/api/afterService/model/v1', params)
  },
  PhoneModel (params = {ppid: ''}) {
    return fetch('/web/api/afterService/PhoneModel/v1', params)
  },
  getAddressList () {
    return fetch('/web/api/afterService/getAddressList/v1')
  },
  getShopList (params = {cityId: '', ppid: ''}) {
    return fetch('/web/api/afterService/getShopList/v1', params)
  },
  submitWxOrder (params) {
    return fetch('/web/api/afterService/submitWxOrder/v1', params, 'post')
  },
  productImei (params) {
    return fetch('/web/api/afterService/productImei/v1', params)
  },
  repairNews () {
    return fetch('/web/api/afterService/repairNews/v1')
  },
  getECertificate (params) {
    return fetch('/web/api/afterService/getECertificate/v1', params)
  }
}
