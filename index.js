import {store} from './store'
// import * as user from './actions/user'
// import * as home from './actions/home'
// import * as brand from './actions/brand'
// import * as expedition from './actions/expedition'
// import * as location from './actions/location'
// import * as product from './actions/product'
// import * as review from './actions/review'
// import * as stores from './actions/stores'
// import * as address from './actions/address'
import * as bank from './actions/bank'
// import * as catalog from './actions/catalog'
// import * as cart from './actions/cart'
// import * as payment from './actions/payment'
// import * as transaction from './actions/transaction'
// import {localStorage} from './localStorage'
store.subscribe(function () {
  console.log(JSON.stringify(store.getState().bankAccountDetail, null, 2))
})

// store.dispatch(user.register({name: 'Indra Bayu', phone_number: '081327', email: 'k.indrabayu@gmail.com', gender: 'L', password: 'aku'}))
// setTimeout (function () {
// store.dispatch(user.login({email: 'testregister@skyshi.com', password: 'testkomuto'}))
// store.dispatch(user.loginSocial({ provider_uid: 10208922684330118, provider_name: 'facebook', access_token: 'EAALyQXlqQYEBAA2dZCUKIvShcXMUJxxpYzD8TaT4ZBDZBeHj6tH2qqJXh24bPReZCffV8ofdRgsrbVZAquT78j5roJZCxQHMPYakU8RlfWQDBgn79CZAA2ELXDVFB4GANtgcILbLG5So70Xt9DM0zY70NcdXoM9N8rkevG2luWScr3YZC8VV7rI3mDiVFMKKC3EefKh48tcUWAZDZD' }))
// setTimeout(function () {
//   console.log('ini token', token())
// store.dispatch(user.validateToken({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.newPassword({token: '9d5e51c87294a378b3e8376d0059e012', password: 'komuto'}))
// store.dispatch(user.verification({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.favoriteStore({id: 6}))
// store.dispatch(user.getPhone())
//   store.dispatch(user.getProfile())
// store.dispatch(user.getDiscussion())
// store.dispatch(email.checkEmail({email: 'testregister@skyshi.com'}))
// store.dispatch(user.updateProfile({
  // name: 'Indra Skyshi Baru',
  // photo: 'http://asikasik',
  // gender: 'male',
  // place_of_birth: 5,
  // date_of_birth: '07/20/1994'}))
// }, 4000)
// setTimeout(function (){
    // asik = localStorage.getItem('user')
    // asoy=JSON.parse(asik)
    // console.log(asoy.token)
// },6000)
// setTimeout(function (){
// store.dispatch(user.newPassword({password: '123456789'}))
// store.dispatch(user.getBalance())
// },6000)
// store.dispatch(user.stateLogin({login: true}))
// store.dispatch(user.loginSocial({provider_name: Facebook, procider_uid: 12345678, access_token: EAAViKAqZCMswBAM1UqlZBZAFRd6OyX0C5b9VpVU0mO0dKWduiZBRC2BqJ3wvHyKkJqUz53IUkr0RBByiFtWWRFcBtV3ZBUA8vSQCnbVvD76vTzuF75YtixmN5K0v00eN0u5DHfGGasSzUYWAOKYfkXglmL4DMMZB8aspE5bqN57h2sNO5CT8Nwhmz7kfbgZCBIZD}))
// store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
// }, 3000)
// setTimeout (function () {
// store.dispatch(user.userAuthentication())
// store.dispatch(user.changePassword({
//    email: 'testregister@skyshi.com',
//    password: 'testkomuto',
//    old_password: 'komuto',
//   password_confirmation: 'testkomuto'
// }))¢¢¢
// },4000)
// store.dispatch(user.sendOTPBank())
// store.dispatch(product.getProduct({id: 9}))
// store.dispatch(product.addToWishlist({id: 1}))
// store.dispatch(product.getDiscussion({id: 4, page: 1, limit: 10}))
// store.dispatch(product.newDiscussion({id: 4, question: 'Barang sudah habis gan?'}))
// store.dispatch(product.getComment({productId: 4, id: 3}))
// store.dispatch(product.newComment({productId: 4, id: 3, content: 'Tapi harga nya diturunin dikit ya mas?'}))
// store.dispatch(home.products({ page: 1, limit: 2, q: 'sepatu', category_id: 63 }))
// store.dispatch(product.listProductByCategory({category_id: 120}))
// store.dispatch(product.listProductBySearch({services: [1, 2, 3, 4]}))
// store.dispatch(home.filter({ is_dropship: false, limit: 2, page: 1 }))
// store.dispatch(home.search({query: 'aya'}))
// store.dispatch(home.allCategory())
// store.dispatch(home.categoryList())
// store.dispatch(home.subCategory({id: 6}))
// store.dispatch(stores.getStores({id: 41}))
// store.dispatch(brand.getBrand())
// store.dispatch(brand.getBrandByCategory({id: 763}))
// store.dispatch(expedition.getExpedition())
// store.dispatch(stores.createStore({
//   store: [
//     'Toko Kumur kumur',
//     'Lorem ipsum',
//     'Lorem ipsum',
//     'logo.jpg'
//   ],
//   expedition_services: [
//     {
//       expedition_service_id: 1,
//       status: 1
//     },
//     {
//       expedition_service_id: 2,
//       status: 0
//     }
//   ],
//   user: [
//     '0982390923989',
//     'Siti Aminah'
//   ],
//   address: [
//     32,
//     3273,
//     1111110,
//     1111110073,
//     'User skyshi',
//     'user@skyshi.com',
//     '081327588531',
//     '84341',
//     'Jl. Klamat No. 24 RT. 002 RW. 003'
//   ]
// }))
// store.dispatch(expedition.updateExpedition({data:
// [
//   {
//     expedition_service_id: 1,
//     status: '1'
//   },
//   {
//     expedition_service_id: 2,
//     status: '0'
//   },
//   {
//     expedition_service_id: 3,
//     status: '0'
//   },
//   {
//     expedition_service_id: 5,
//     status: '1'
//   }
// ]}))
// store.dispatch(review.listReviews({id: 9, page: 1, limit: 2}))
// store.dispatch(review.addReview({id: 9, review: 'Obatnya manjur ganteng', quality: 4, accuracy: 5}))
// store.dispatch(expedition.getServices())
// store.dispatch(expedition.getShippingCharge({id: 2, weight: 1700, origin_id: 152, destination_id: 10}))
// store.dispatch(expedition.estimatedShipping({id: 1, weight: 2000, origin_id: 32, destination_id: 1116}))
// store.dispatch(location.getProvince())
// store.dispatch(location.getDistrict({ province_id: 34 }))
// store.dispatch(location.getSubDistrict({district_id: 3404}))
// store.dispatch(location.getVillage({sub_district_id: 3404110}))
// setTimeout(function () {
// store.dispatch(user.logout())
// }, 10000)

// store.dispatch(address.addAddress({
//   province_id: 34,
//   district_id: 3404,
//   sub_district_id: 3404050,
//   village_id: 3404050005,
//   name: 'Indbay skyshi',
//   email: 'k.indrabayu@gmail.com',
//   phone_number: '081222333444',
//   postal_code: '84314',
//   address: 'Jl. Klamat No. 24 RT. 002 RW. 003',
//   alias_address: 'Alamat Toko',
//   is_primary: true})
// )
// store.dispatch(address.updateAddress({
//   id: 259,
//   village_id: 3404050003,
//   is_primary: true})
// )
// store.dispatch(address.deleteAddress({id: 361}))
// store.dispatch(address.getListAddress())
// store.dispatch(address.getAddressDetail({id: 2670}))

// store.dispatch(bank.getBank({id: 1}))
// store.dispatch(bank.listBank())

// store.dispatch(stores.storeExpeditionList())
// store.dispatch(stores.storeExpeditionManage())
// store.dispatch(catalog.createCatalog({name: 'Kain Kucel'}))
// store.dispatch(catalog.getCatalog({id: 33}))
// store.dispatch(catalog.getListCatalog())
// store.dispatch(catalog.updateCatalog({id: 33, name: 'Batik kumur kumur'}))
// store.dispatch(catalog.deleteCatalog({id: 78}))
// store.dispatch(user.listFavorite({ page: 1, limit: 5 }))
// store.dispatch(user.sendOTPPhone())
// store.dispatch(user.verifyPhone({code: '87325'}))
// store.dispatch(stores.verifyStore({code: '640091'}))
// store.dispatch(stores.sendMessageStore({id: 1, subject: 'Mau nanya nih', content: 'Sepatu ini sepatu siapa?'}))
// store.dispatch(product.reportProduct({id: 1, report_type: 1, description: 'Salah saya ini, saya cowok'}))
// store.dispatch(address.getPrimaryAddress())
// setTimeout(() => store.dispatch(cart.addToCartReset()), 2000)
// store.dispatch(bank.addBankAccount({code: '77575', master_bank_id: 5, holder_name: 'kucing', holder_account_number: '123456788243', bank_branch_office_name: 'bawah kasur'}))
// store.dispatch(stores.getOwnStore())
// store.dispatch(bank.getBankAccounts())
// setTimeout(() => store.dispatch(bank.getBankAccounts({ id: 18 })), 5000)
// store.dispatch(cart.getPromo({ code: 'BELANJAENAK' }))
// store.dispatch(stores.getStoreProducts({ hidden: true }))
// store.dispatch(product.hideProducts({ product_ids: [93, 116] }))
// store.dispatch(product.deleteProducts({ product_ids: [34, 35] }))
// store.dispatch(cart.countCart())
// store.dispatch(user.wishlist())
// store.dispatch(product.createProduct({
//   name: 'Alat kumur kumir',
//   category_id: 63,
//   brand_id: 1,
//   description: 'lorem ipsum',
//   price: 16500,
//   weight: 500,
//   stock: 50,
//   condition: 1,
//   insurance: 0,
//   is_dropship: true,
//   catalog_id: 33,
//   wholesales: [{ min_order: 5, max_order: 10, price: 1500000 }, { min_order: 11, max_order: 15, price: 1200000 }],
//   expeditions: [{ expedition_service_id: 1 }, { expedition_service_id: 2 }],
//   images: [{ name: 'kucing.png' }, { name: 'kambing.png' }]
// }))
// store.dispatch(product.changeCatalogProducts({ catalog_id: 33, product_ids: [ 30, 40 ] }))
// store.dispatch(expedition.getStoreExpeditions())
// store.dispatch(bank.updateBankAccount({ id: 15, code: '10373', master_bank_id: 2, holder_name: 'aep', holder_account_number: '43254362541', bank_branch_office_name: 'iap' }))
// store.dispatch(bank.deleteBankAccount({ id: 31, code: '10373' }))
// store.dispatch(stores.getStoreCatalogProducts({ id: 33 }))
// store.dispatch(payment.getPaymentMethods())
// store.dispatch(payment.choosePaymentMethods({ id: 259, payment_method_id: 1 }))
// store.dispatch(payment.confirmTransfer({ id: 259, bank_account_id: 10, date: 1477242000, amount: 150000, bank: 'BNI', holder_account_number: 837375393910, attachment: 'attachment.png' }))
// store.dispatch(cart.getCart())
// setTimeout(() => store.dispatch(cart.deleteItem({ id: 417 })), 4000)
// store.dispatch(cart.addToCart({product_id: 97, expedition_id: 1, expedition_service_id: 3, qty: 1, note: 'lorem ipsum', address_id: 145, is_insurance: true, additional_cost: 500, delivery_cost: 32000}))
// setTimeout(() => store.dispatch(cart.addToCart({product_id: 96, expedition_id: 1, expedition_service_id: 3, qty: 1, note: 'lorem ipsum', address_id: 145, is_insurance: true, additional_cost: 500, delivery_cost: 32000})), 4000)
// setTimeout(() => store.dispatch(cart.cancelPromo()), 5 * 1000)
// store.dispatch(cart.checkout({ items: [] }))
// store.dispatch(bank.getKomutoBankAccounts())
// store.dispatch(transaction.listTransactions())
// store.dispatch(transaction.getTransaction({ id: 259 }))
// store.dispatch(cart.getItem({ id: 418 }))
// store.dispatch(stores.getStoreAddress())
// store.dispatch(stores.updateStoreAddress({
//   province_id: 32,
//   district_id: 3273,
//   sub_district_id: 1111110,
//   village_id: 1111110073,
//   postal_code: '84341',
//   address: 'Jl. Kucing'
// }))
// store.dispatch(expedition.manageStoreExpeditions())
store.dispatch(bank.getBankAccountDetail({ id: 18 }))
