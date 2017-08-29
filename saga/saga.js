import * as userActions from '../actions/user'
import * as homeActions from '../actions/home'
import * as brandActions from '../actions/brand'
import * as expeditionActions from '../actions/expedition'
import * as locationActions from '../actions/location'
import * as productActions from '../actions/product'
import * as reviewActions from '../actions/review'
import * as storeActions from '../actions/stores'
import * as addressActions from '../actions/address'
import * as bankActions from '../actions/bank'
import * as catalogActions from '../actions/catalog'
import * as cartActions from '../actions/cart'
import * as paymentActions from '../actions/payment'
import * as transactionActions from '../actions/transaction'
import * as messageActions from '../actions/message'
import * as userSaga from './user'
import * as homeSaga from './home'
import * as brandSaga from './brand'
import * as expeditionSaga from './expedition'
import * as locationSaga from './location'
import * as productSaga from './product'
import * as reviewSaga from './review'
import * as storeSaga from './stores'
import * as addressSaga from './address'
import * as bankSaga from './bank'
import * as catalogSaga from './catalog'
import * as cartSaga from './cart'
import * as paymentSaga from './payment'
import * as transactionSaga from './transaction'
import * as messageSaga from './message'
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { typeReq } from '../config'

function* dataSaga () {
  yield * user()
  yield * home()
  yield * product()
  yield * store()
  yield * address()
  yield * bank()
  yield * brand()
  yield * catalog()
  yield * cart()
  yield * expedition()
  yield * location()
  yield * payment()
  yield * review()
  yield * transaction()
  yield * message()
}

const user = function* () {
  yield takeEvery(typeReq(userActions.USER_REGISTER), userSaga.register)
  yield takeEvery(typeReq(userActions.USER_VERIFICATION), userSaga.verify)
  yield takeEvery(typeReq(userActions.USER_LOGIN), userSaga.login)
  yield takeEvery(typeReq(userActions.USER_LOGOUT), userSaga.logout)
  yield takeEvery(typeReq(userActions.VALIDATE_TOKEN_FORGET_PASSWORD), userSaga.validateToken)
  yield takeEvery(typeReq(userActions.GET_PROFILE), userSaga.getProfile)
  yield takeEvery(typeReq(userActions.GET_PROFILE_MANAGE), userSaga.getProfileManage)
  yield takeEvery(typeReq(userActions.UPDATE_PROFILE), userSaga.updateProfile)
  yield takeEvery(typeReq(userActions.FORGET_PASSWORD), userSaga.forgetPassword)
  yield takeEvery(typeReq(userActions.LOGIN_SOCIAL), userSaga.loginSocial)
  yield takeEvery(typeReq(userActions.USER_NEW_PASSWORD), userSaga.newPassword)
  yield takeEvery(typeReq(userActions.CHANGE_PASSWORD), userSaga.changePassword)
  yield takeEvery(typeReq(userActions.FAVORITE_STORE), userSaga.favoriteStore)
  yield takeEvery(typeReq(userActions.USER_BALANCE), userSaga.getBalance)
  yield takeEvery(typeReq(userActions.GET_PHONE), userSaga.getPhone)
  yield takeEvery(typeReq(userActions.UPDATE_PHONE), userSaga.updatePhone)
  yield takeEvery(typeReq(userActions.GET_USER_DISCUSSION), userSaga.getDiscussion)
  yield takeEvery(typeReq(userActions.LIST_FAVORIT_STORE), userSaga.listFavoriteStore)
  yield takeEvery(typeReq(userActions.SEND_PHONE_OTP), userSaga.sendOTPPhone)
  yield takeEvery(typeReq(userActions.VERIFIY_PHONE), userSaga.verifyPhone)
  yield takeEvery(typeReq(userActions.SEND_BANK_OTP), userSaga.sendOTPBank)
  yield takeEvery(typeReq(userActions.GET_WISHLIST), userSaga.wishlist)
}

const home = function* () {
  yield takeLatest(typeReq(homeActions.HOME_PRODUCT), homeSaga.product)
  yield takeLatest(typeReq(homeActions.SEARCH_PRODUCT), homeSaga.search)
  yield takeLatest(typeReq(homeActions.FILTER_PRODUCT), homeSaga.filterProduct)
  yield takeEvery(typeReq(homeActions.ALL_CATEGORY), homeSaga.allCategory)
  yield takeEvery(typeReq(homeActions.GET_CATEGORIES_1), homeSaga.categoryList)
  yield takeEvery(typeReq(homeActions.GET_CATEGORIES_2), homeSaga.subCategory)
  yield takeEvery(typeReq(homeActions.GET_CATEGORIES_3), homeSaga.subCategory2)
  yield takeEvery(typeReq(homeActions.GET_CATEGORIES_4), homeSaga.subCategory3)
}

const product = function* () {
  yield takeEvery(typeReq(productActions.GET_PRODUCT), productSaga.getProduct)
  yield takeLatest(typeReq(productActions.LIST_PRODUCT_BY_CATEGORY), productSaga.productByCategory)
  yield takeLatest(typeReq(productActions.LIST_PRODUCT_BY_SEARCH), productSaga.productBySearch)
  yield takeEvery(typeReq(productActions.ADD_TO_WISHLIST), productSaga.addToWishlist)
  yield takeEvery(typeReq(productActions.ADD_TO_WISHLIST_HOME), productSaga.addToWishlist)
  yield takeEvery(typeReq(productActions.GET_DISCUSSION), productSaga.getDiscussion)
  yield takeEvery(typeReq(productActions.NEW_DISCUSSION), productSaga.newDiscussion)
  yield takeEvery(typeReq(productActions.GET_COMMENT), productSaga.getComment)
  yield takeEvery(typeReq(productActions.NEW_COMMENT), productSaga.newComment)
  yield takeEvery(typeReq(productActions.REPORT_PRODUCT), productSaga.reportProduct)
  yield takeEvery(typeReq(productActions.CREATE_PRODUCT), productSaga.createProduct)
  yield takeEvery(typeReq(productActions.HIDE_PRODUCTS), productSaga.hideProducts)
  yield takeEvery(typeReq(productActions.DELETE_PRODUCTS), productSaga.deleteProducts)
  yield takeEvery(typeReq(productActions.CHANGE_CATALOG), productSaga.changeCatalogProducts)
  yield takeEvery(typeReq(productActions.UPDATE_PRODUCT), productSaga.updateProduct)
  yield takeEvery(typeReq(productActions.GET_PRODUCT_EXPEDITIONS), productSaga.getProductExpeditions)
  yield takeEvery(typeReq(productActions.ADD_DROPSHIP_PRODUCTS), productSaga.addDropshipProducts)
  yield takeEvery(typeReq(productActions.GET_DROPSHIP_PRODUCTS), productSaga.getDropshipProducts)
  yield takeEvery(typeReq(productActions.UPDATE_DROPSHIP_STATUS), productSaga.updateDropshipStatus)
}

const store = function* () {
  yield takeEvery(typeReq(storeActions.GET_STORE), storeSaga.getStores)
  yield takeEvery(typeReq(storeActions.CREATE_STORE), storeSaga.createStore)
  yield takeEvery(typeReq(storeActions.PHOTO_UPLOAD), storeSaga.photoUpload)
  yield takeEvery(typeReq(storeActions.STORE_EXPEDITION_LIST), storeSaga.storeExpeditionList)
  yield takeEvery(typeReq(storeActions.VERIFY_STORE), storeSaga.verifyStore)
  yield takeEvery(typeReq(storeActions.MESSAGE_STORE), storeSaga.sendMessageStore)
  yield takeEvery(typeReq(storeActions.STORE_EXPEDITION_MANAGE), storeSaga.storeExpeditionManage)
  yield takeEvery(typeReq(storeActions.GET_OWN_STORE), storeSaga.getOwnStore)
  yield takeEvery(typeReq(storeActions.GET_STORE_PRODUCTS), storeSaga.getStoreProducts)
  yield takeEvery(typeReq(storeActions.GET_STORE_PRODUCT_DETAIL), storeSaga.getStoreProductDetail)
  yield takeEvery(typeReq(storeActions.GET_STORE_CATALOG_PRODUCTS), storeSaga.getStoreCatalogProducts)
  yield takeEvery(typeReq(storeActions.UPDATE_INFORMATION), storeSaga.updateInformation)
  yield takeEvery(typeReq(storeActions.UPDATE_TERM), storeSaga.updateTerm)
  yield takeEvery(typeReq(storeActions.GET_ADDRESS), storeSaga.getStoreAddress)
  yield takeEvery(typeReq(storeActions.UPDATE_STORE_ADDRESS), storeSaga.updateStoreAddress)
  yield takeEvery(typeReq(storeActions.GET_HIDDEN_STORE_PRODUCTS), storeSaga.getHiddenStoreProducts)
  yield takeEvery(typeReq(storeActions.GET_STORE_DISCUSSIONS), storeSaga.getStoreDiscussions)
}

const address = function* () {
  yield takeEvery(typeReq(addressActions.ADD_ADDRESS), addressSaga.addAddress)
  yield takeEvery(typeReq(addressActions.UPDATE_ADDRESS), addressSaga.updateAddress)
  yield takeEvery(typeReq(addressActions.DELETE_ADDRESS), addressSaga.deleteAddress)
  yield takeEvery(typeReq(addressActions.GET_ADDRESS_DETAIL), addressSaga.getAddressDetail)
  yield takeEvery(typeReq(addressActions.GET_LIST_ADDRESS), addressSaga.getListAddress)
  yield takeEvery(typeReq(addressActions.GET_PRIMARY_ADDRESS), addressSaga.getPrimaryAddress)
}

const bank = function* () {
  yield takeEvery(typeReq(bankActions.LIST_BANK), bankSaga.listBank)
  yield takeEvery(typeReq(bankActions.GET_BANK), bankSaga.getBank)
  yield takeEvery(typeReq(bankActions.ADD_BANK_ACCOUNT), bankSaga.addBankAccount)
  yield takeEvery(typeReq(bankActions.GET_BANK_ACCOUNTS), bankSaga.getBankAccounts)
  yield takeEvery(typeReq(bankActions.UPDATE_BANK_ACCOUNT), bankSaga.updateBankAccount)
  yield takeEvery(typeReq(bankActions.DELETE_BANK_ACCOUNT), bankSaga.deleteBankAccount)
  yield takeEvery(typeReq(bankActions.GET_KOMUTO_BANK_ACCOUNTS), bankSaga.getKomutoBankAccounts)
  yield takeEvery(typeReq(bankActions.GET_BANK_ACCOUNT_DETAIL), bankSaga.getBankAccountDetail)
}

const brand = function* () {
  yield takeEvery(typeReq(brandActions.GET_BRAND), brandSaga.getBrand)
  yield takeEvery(typeReq(brandActions.BRAND_BY_CATEGORY), brandSaga.getBrandByCategory)
}

const catalog = function* () {
  yield takeEvery(typeReq(catalogActions.CREATE_CATALOG), catalogSaga.createCatalog)
  yield takeEvery(typeReq(catalogActions.GET_CATALOG), catalogSaga.getCatalog)
  yield takeEvery(typeReq(catalogActions.GET_LIST_CATALOG), catalogSaga.getListCatalog)
  yield takeEvery(typeReq(catalogActions.UPDATE_CATALOG), catalogSaga.updateCatalog)
  yield takeEvery(typeReq(catalogActions.DELETE_CATALOG), catalogSaga.deleteCatalog)
}

const cart = function* () {
  yield takeEvery(typeReq(cartActions.ADD_TO_CART), cartSaga.addToCart)
  yield takeEvery(typeReq(cartActions.GET_PROMO), cartSaga.getPromo)
  yield takeEvery(typeReq(cartActions.COUNT_CART), cartSaga.countCart)
  yield takeEvery(typeReq(cartActions.GET_CART), cartSaga.getCart)
  yield takeEvery(typeReq(cartActions.CANCEL_PROMO), cartSaga.cancelPromo)
  yield takeEvery(typeReq(cartActions.CHECKOUT), cartSaga.checkout)
  yield takeEvery(typeReq(cartActions.DELETE_ITEM), cartSaga.deleteItem)
  yield takeEvery(typeReq(cartActions.GET_ITEM), cartSaga.getItem)
  yield takeEvery(typeReq(cartActions.UPDATE_CART), cartSaga.updateCart)
}

const expedition = function* () {
  yield takeEvery(typeReq(expeditionActions.GET_EXPEDITION), expeditionSaga.getExpedition)
  yield takeEvery(typeReq(expeditionActions.GET_EXPEDITION_SERVICES), expeditionSaga.getServices)
  yield takeEvery(typeReq(expeditionActions.ESTIMATED_SHIPPING), expeditionSaga.estimatedCharge)
  yield takeEvery(typeReq(expeditionActions.GET_SHIPPING_CHARGE), expeditionSaga.getShippingCharge)
  yield takeEvery(typeReq(expeditionActions.UPDATE_EXPEDITION), expeditionSaga.updateExpedition)
  yield takeEvery(typeReq(expeditionActions.GET_STORE_EXPEDITIONS), expeditionSaga.getStoreExpeditions)
  yield takeEvery(typeReq(expeditionActions.MANAGE_STORE_EXPEDITIONS), expeditionSaga.manageStoreExpeditions)
}

const location = function* () {
  yield takeEvery(typeReq(locationActions.GET_PROVINCE), locationSaga.getProvince)
  yield takeEvery(typeReq(locationActions.GET_DISTRICT), locationSaga.getDistrict)
  yield takeEvery(typeReq(locationActions.GET_SUBDISTRICT), locationSaga.getSubDistrict)
  yield takeEvery(typeReq(locationActions.GET_VILLAGE), locationSaga.getVillage)
}

const message = function* () {
  yield takeEvery(typeReq(messageActions.GET_BUYER_MESSAGES), messageSaga.getBuyerMessages)
  yield takeEvery(typeReq(messageActions.GET_SELLER_MESSAGES), messageSaga.getSellerMessages)
  yield takeEvery(typeReq(messageActions.GET_BUYER_DETAIL_MESSAGE), messageSaga.getBuyerDetailMessage)
  yield takeEvery(typeReq(messageActions.GET_SELLER_DETAIL_MESSAGE), messageSaga.getSellerDetailMessage)
  yield takeEvery(typeReq(messageActions.GET_ARCHIVE_BUYER_MESSAGES), messageSaga.getArchiveBuyerMessages)
  yield takeEvery(typeReq(messageActions.GET_ARCHIVE_SELLER_MESSAGES), messageSaga.getArchiveSellerMessages)
  yield takeEvery(typeReq(messageActions.UPDATE_BUYER_MESSAGE), messageSaga.updateBuyerMessage)
  yield takeEvery(typeReq(messageActions.UPDATE_SELLER_MESSAGE), messageSaga.updateSellerMessage)
}

const payment = function* () {
  yield takeEvery(typeReq(paymentActions.PAY_DOKU), paymentSaga.payDoku)
  yield takeEvery(typeReq(paymentActions.GET_DOKU_INVOICE), paymentSaga.getDokuInvoice)
  yield takeEvery(typeReq(paymentActions.GET_PAYMENT_METHODS), paymentSaga.getPaymentMethods)
  yield takeEvery(typeReq(paymentActions.CONFIRM_TRANSFER), paymentSaga.confirmTransfer)
  yield takeEvery(typeReq(paymentActions.WITHDRAW), paymentSaga.withdraw)
}

const review = function* () {
  yield takeEvery(typeReq(reviewActions.GET_REVIEWS), reviewSaga.getReviews)
  yield takeEvery(typeReq(reviewActions.ADD_REVIEW), reviewSaga.addReview)
  yield takeEvery(typeReq(reviewActions.GET_BUYER_REVIEW), reviewSaga.getBuyerReview)
  yield takeEvery(typeReq(reviewActions.GET_SELLER_REVIEW), reviewSaga.getSellerReview)
}

const transaction = function* () {
  yield takeEvery(typeReq(transactionActions.LIST_TRANSACTIONS), transactionSaga.listTransactions)
  yield takeEvery(typeReq(transactionActions.GET_TRANSACTION), transactionSaga.getTransaction)
}

export default dataSaga
