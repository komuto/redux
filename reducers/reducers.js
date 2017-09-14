import { combineReducers } from 'redux'
import * as storage from 'redux-storage'
import * as userReducers from './user'
import * as homeReducers from './home'
import * as brandReducers from './brand'
import * as productReducers from './product'
import * as expeditionReducers from './expedition'
import * as locationReducers from './location'
import * as reviewReducers from './review'
import * as storeReducers from './stores'
import * as addressReducers from './address'
import * as bankReducers from './bank'
import * as catalogReducers from './catalog'
import * as cartReducers from './cart'
import * as paymentReducers from './payment'
import * as transactionReducers from './transaction'
import * as messageReducers from './message'
import * as otherReducers from './other'
import * as saldoReducers from './saldo'

const user = {
  user: userReducers.auth,
  verification: userReducers.verify,
  validation: userReducers.validateToken,
  newPassword: userReducers.newPassword,
  changePassword: userReducers.changePassword,
  profile: userReducers.getProfile,
  updateProfile: userReducers.updateProfile,
  register: userReducers.register,
  forgetPassword: userReducers.forgetPassword,
  isLogin: userReducers.isLogin,
  balance: userReducers.getBalance,
  favorite: userReducers.favoriteStore,
  phone: userReducers.getPhone,
  updatePhone: userReducers.updatePhone,
  userDiscussion: userReducers.getDiscussion,
  listFavoriteStore: userReducers.listFavoriteStore,
  sendOTPPhone: userReducers.sendOTPPhone,
  verifyPhone: userReducers.verifyPhone,
  sendOTPBank: userReducers.sendOTPBank,
  wishlist: userReducers.wishlist,
  alterUser: userReducers.alterUser,
  notifSettings: userReducers.notifSettings,
  resolvedResolutions: userReducers.getResolvedResolutions,
  unresolvedResolutions: userReducers.getUnresolvedResolutions,
  resolutionDetail: userReducers.getResolutionDetail,
  createResolution: userReducers.createResolution,
  replyResolution: userReducers.replyResolution
}

const home = {
  products: homeReducers.product,
  searchProduct: homeReducers.searchProduct,
  filterProduct: homeReducers.filterProduct,
  allCategory: homeReducers.allCategory,
  category: homeReducers.categoryList,
  subCategory: homeReducers.subCategory,
  subCategory2: homeReducers.subCategory2,
  subCategory3: homeReducers.subCategory3
}

const product = {
  productDetail: productReducers.getProduct,
  productByCategory: productReducers.productByCategory,
  productBySearch: productReducers.productBySearch,
  addWishlist: productReducers.addToWishlist,
  addWishlistHome: productReducers.addToWishlistHome,
  discussions: productReducers.getDiscussion,
  newDiscussion: productReducers.newDiscussion,
  comments: productReducers.getComment,
  newComment: productReducers.newComment,
  report: productReducers.reportProduct,
  alterProducts: productReducers.alterProducts,
  productExpeditions: productReducers.getProductExpeditions,
  addDropshipProducts: productReducers.addDropshipProducts,
  tempCreateProduct: productReducers.tempCreateProduct,
  dropshipProducts: productReducers.getDropshipProducts
}

const store = {
  stores: storeReducers.stores,
  upload: storeReducers.photoUpload,
  createStore: storeReducers.createStore,
  expeditionListStore: storeReducers.expeditionListStore,
  expeditionStore: storeReducers.expeditionStore,
  verifyStore: storeReducers.verifyStore,
  sendMessageStore: storeReducers.sendMessageStore,
  ownStore: storeReducers.getOwnStore,
  storeProducts: storeReducers.getStoreProducts,
  storeProductDetail: storeReducers.getStoreProductDetail,
  storeCatalogProducts: storeReducers.getStoreCatalogProducts,
  tempCreateStore: storeReducers.tempCreateStore,
  updateStore: storeReducers.updateStore,
  storeAddress: storeReducers.getStoreAddress,
  updateStoreAddress: storeReducers.updateStoreAddress,
  hiddenStoreProducts: storeReducers.getHiddenStoreProducts,
  storeDiscussions: storeReducers.getStoreDiscussions,
  storeProductsByCatalog: storeReducers.getStoreProductsByCatalog
}

const address = {
  address: addressReducers.getAddressDetail,
  updateAddress: addressReducers.updateAddress,
  deleteAddress: addressReducers.deleteAddress,
  addAddress: addressReducers.addAddress,
  listAddress: addressReducers.listAddress,
  primaryAddress: addressReducers.primaryAddress
}

const bank = {
  bank: bankReducers.getBank,
  banks: bankReducers.listBank,
  bankAccount: bankReducers.bankAccount,
  listBankAccounts: bankReducers.getBankAccounts,
  bankAccountDetail: bankReducers.getBankAccountDetail,
  komutoAccounts: bankReducers.getKomutoBankAccounts
}

const brand = {
  brands: brandReducers.brand,
  brandsByCategory: brandReducers.brandByCategory
}

const catalog = {
  createCatalog: catalogReducers.createCatalog,
  updateCatalog: catalogReducers.updateCatalog,
  getCatalog: catalogReducers.getDetailCatalog,
  getListCatalog: catalogReducers.getListCatalog,
  deleteCatalog: catalogReducers.deleteCatalog
}

const cart = {
  cart: cartReducers.cart,
  checkout: cartReducers.checkout,
  addToCart: cartReducers.addToCart,
  promo: cartReducers.getPromo,
  cancelPromo: cartReducers.cancelPromo,
  countCart: cartReducers.countCart,
  item: cartReducers.getItem,
  deleteItem: cartReducers.deleteItem,
  updateCart: cartReducers.updateCart
}

const expedition = {
  expeditions: expeditionReducers.expedition,
  expeditionServices: expeditionReducers.expeditionServices,
  estimatedCharges: expeditionReducers.estimatedShipping,
  shippingCharges: expeditionReducers.shippingCharge,
  updateExpedition: expeditionReducers.updateExpediton,
  storeExpeditions: expeditionReducers.getStoreExpeditions,
  manageExpeditions: expeditionReducers.manageStoreExpeditions
}

const location = {
  provinces: locationReducers.province,
  districts: locationReducers.district,
  subdistricts: locationReducers.subdistrict,
  villages: locationReducers.village
}

const message = {
  buyerMessages: messageReducers.getBuyerMessages,
  sellerMessages: messageReducers.getSellerMessages,
  buyerDetailMessage: messageReducers.getBuyerDetailMessage,
  sellerDetailMessage: messageReducers.getSellerDetailMessage,
  archiveBuyerMessages: messageReducers.getArchiveBuyerMessages,
  archiveSellerMessages: messageReducers.getArchiveSellerMessages,
  updateMessage: messageReducers.updateMessage,
  replyMessage: messageReducers.replyMessage,
  deleteMessage: messageReducers.deleteMessage,
  transactionMessage: messageReducers.transactionMessage
}

const other = {
  commission: otherReducers.getCommission
}

const payment = {
  paymentMethods: paymentReducers.getPaymentMethods,
  confirmation: paymentReducers.confirmTransfer,
  snapToken: paymentReducers.getMidtransToken,
  snapToken2: paymentReducers.getMidtransToken2
}

const review = {
  productReview: reviewReducers.getReviews,
  addReviews: reviewReducers.addReviews,
  buyerReview: reviewReducers.getBuyerReview,
  sellerReview: reviewReducers.getSellerReview
}

const saldo = {
  saldoHistory: saldoReducers.getSaldoHistory,
  withdrawal: saldoReducers.withdraw,
  saldoToken: saldoReducers.getSaldoToken,
  nominals: saldoReducers.getNominals
}

const transaction = {
  listTransactions: transactionReducers.listTransactions,
  transaction: transactionReducers.getTransaction,
  buyerInvoiceDetail: transactionReducers.getBuyerInvoiceDetail,
  addComplaint: transactionReducers.addComplaint,
  newOrders: transactionReducers.getNewOrders,
  newOrderDetail: transactionReducers.getNewOrderDetail,
  processingOrders: transactionReducers.getProcessingOrders,
  processingOrderDetail: transactionReducers.getProcessingOrderDetail
}

const komutoApps = storage.reducer(combineReducers({
  ...user,
  ...home,
  ...product,
  ...store,
  ...address,
  ...bank,
  ...brand,
  ...catalog,
  ...cart,
  ...expedition,
  ...location,
  ...review,
  ...payment,
  ...transaction,
  ...message,
  ...other,
  ...saldo
}))

export default komutoApps
