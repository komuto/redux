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
store.subscribe(function () {
  console.log(store.getState())
})

// store.dispatch(user.register({name: 'Indra Bayu', phone_number: '081327', email: 'k.indrabayu@gmail.com', gender: 'L', password: 'aku'}))
// setTimeout (function () {
// store.dispatch(user.login({email: 'beny@skyshi.com', password: 'komuto'}))
// setTimeout(function () {
//   console.log('ini token', token())
// store.dispatch(user.validateToken({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.newPassword({token: '9d5e51c87294a378b3e8376d0059e012', password: 'komuto'}))
// store.dispatch(user.verification({token: '9d5e51c87294a378b3e8376d0059e012'}))
  // store.dispatch(user.getProfile())
store.dispatch(email.checkEmail({email: 'beny@skyshi.com'}))
// store.dispatch(user.updateProfile({
  // name: 'Indra Skyshi Baru',
  // cooperative_member_number: 'ALSK83929K',
  // photo: 'http://asikasik',
  // phone_number: '081222333444',
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
store.dispatch(user.newPassword({password: '123456789'}))
// store.dispatch(user.getBalance())
// },6000)
  // store.dispatch(user.stateLogin({login: true}))
  // store.dispatch(user.loginSocial({provider_name: "Facebook", procider_uid: "12345678", access_token: "EAAViKAqZCMswBAM1UqlZBZAFRd6OyX0C5b9VpVU0mO0dKWduiZBRC2BqJ3wvHyKkJqUz53IUkr0RBByiFtWWRFcBtV3ZBUA8vSQCnbVvD76vTzuF75YtixmN5K0v00eN0u5DHfGGasSzUYWAOKYfkXglmL4DMMZB8aspE5bqN57h2sNO5CT8Nwhmz7kfbgZCBIZD"}))
  // store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
// }, 3000)
// setTimeout (function () {
//   store.dispatch(user.userAuthentication())
// },4000)
// store.dispatch(product.getProduct({id: 99}))
store.dispatch(home.products())
store.dispatch(product.listProductByCategory({category_id: 120}))
store.dispatch(product.listProductBySearch({query: 'a'}))
// store.dispatch(home.filter({page: 2, size: 6, condition: 'new', price: [50, 0]}))
// store.dispatch(home.search({query: 'aya'}))
// store.dispatch(home.allCategory())
// store.dispatch(home.categoryList())
// store.dispatch(home.subCategory({id: 6}))
store.dispatch(stores.getStores({id: 41}))
store.dispatch(wishlist.wishlist())
store.dispatch(brand.getBrand())
// store.dispatch(brand.getBrandByCategory({id: 763}))
// store.dispatch(expedition.getExpedition())
store.dispatch(review.getReview({id: 9}))
// store.dispatch(review.addReview({id: 9, review: 'Obatnya manjur ganteng', quality: 4, accuracy: 5}))
store.dispatch(expedition.getServices())
// store.dispatch(expedition.getShippingCharge({id: 2, weight: 1700, origin_ro_id: 501, destination_ro_id: 62}))
store.dispatch(location.getProvince())
// store.dispatch(location.getDistrict({province_id: 34}))
// store.dispatch(location.getSubDistrict({district_id: 3404}))
// store.dispatch(location.getVillage({sub_district_id: 3404110}))
// setTimeout(function () {
// store.dispatch(user.logout())
// }, 10000)
