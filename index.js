import {store} from './store'
import * as user from './actions/user'
import * as home from './actions/home'
import * as brand from './actions/brand'
import * as expedition from './actions/expedition'
import * as location from './actions/location'
import * as wishlist from './actions/wishlist'
import * as product from './actions/product'
import * as review from './actions/review'
import * as stores from './actions/stores'
import * as email from './actions/email'
import * as address from './actions/address'
import * as bank from './actions/bank'
// import {localStorage} from './localStorage'
store.subscribe(function () {
  console.log(store.getState())
})

// store.dispatch(user.register({name: 'Indra Bayu', phone_number: '081327', email: 'k.indrabayu@gmail.com', gender: 'L', password: 'aku'}))
// setTimeout (function () {
// store.dispatch(user.login({email: 'k.indrabayu@gmail.com', password: 'asikasik'}))
// setTimeout(function () {
//   console.log('ini token', token())
// store.dispatch(user.validateToken({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.newPassword({token: '9d5e51c87294a378b3e8376d0059e012', password: 'komuto'}))
// store.dispatch(user.verification({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.favoriteStore({id: 2}))
// store.dispatch(user.countBucket())
// store.dispatch(user.getPhone())
  // store.dispatch(user.getProfile())
store.dispatch(user.getDiscussion())
store.dispatch(email.checkEmail({email: 'beny@skyshi.com'}))
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
  // store.dispatch(user.loginSocial({provider_name: "Facebook", procider_uid: "12345678", access_token: "EAAViKAqZCMswBAM1UqlZBZAFRd6OyX0C5b9VpVU0mO0dKWduiZBRC2BqJ3wvHyKkJqUz53IUkr0RBByiFtWWRFcBtV3ZBUA8vSQCnbVvD76vTzuF75YtixmN5K0v00eN0u5DHfGGasSzUYWAOKYfkXglmL4DMMZB8aspE5bqN57h2sNO5CT8Nwhmz7kfbgZCBIZD"}))
  // store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
// }, 3000)
// setTimeout (function () {
// store.dispatch(user.userAuthentication())
// store.dispatch(user.changePassword({
//    email: 'testregister@skyshi.com',
//    password: 'testkomuto',
//    old_password: 'komuto',
//   password_confirmation: 'testkomuto'
// }))
// },4000)
// store.dispatch(product.getProduct({id: 99}))
// store.dispatch(product.addToWishlist({id: 1}))
// store.dispatch(product.getDiscussion({id: 4, page: 1, limit: 10}))
store.dispatch(product.newDiscussion({id: 4, question: 'Barang sudah habis gan?'}))
store.dispatch(home.products())
// store.dispatch(product.listProductByCategory({category_id: 120}))
// store.dispatch(product.listProductBySearch({services: [1, 2, 3, 4]}))
// store.dispatch(home.filter({page: 2, size: 6, condition: 'new', price: [50, 0]}))
// store.dispatch(home.search({query: 'aya'}))
// store.dispatch(home.allCategory())
// store.dispatch(home.categoryList())
// store.dispatch(home.subCategory({id: 6}))
store.dispatch(stores.getStores({id: 41}))
store.dispatch(wishlist.wishlist())
store.dispatch(brand.getBrand())
// store.dispatch(brand.getBrandByCategory({id: 763}))
store.dispatch(expedition.getExpedition())
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
store.dispatch(review.getReview({id: 9}))
// store.dispatch(review.listReviewPagination({id: 9, page: 1, limit: 4}))
// store.dispatch(review.addReview({id: 9, review: 'Obatnya manjur ganteng', quality: 4, accuracy: 5}))
// store.dispatch(expedition.getServices())
// store.dispatch(expedition.getShippingCharge({id: 2, weight: 2, origin_ro_id: 32, destination_ro_id: 1116}))
store.dispatch(expedition.estimatedShipping({id: 1, weight: 2, origin_id: 32, destination_id: 1116}))
store.dispatch(location.getProvince())
// store.dispatch(location.getDistrict({province_id: 34}))
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
store.dispatch(address.deleteAddress({id: 267}))
// store.dispatch(address.getListAddress())
// store.dispatch(address.getAddressDetail({id: 267}))

store.dispatch(bank.getBank({id: 1}))
// store.dispatch(bank.listBank())

// store.dispatch(stores.storeExpeditionList())
// store.dispatch(stores.storeExpeditionManage())
