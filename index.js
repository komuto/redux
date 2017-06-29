import {store} from './store'
import * as user from './actions/user'
import * as home from './actions/home'
import * as brand from './actions/brand'
import * as expedition from './actions/expedition'
import * as location from './actions/location'
import * as wishlist from './actions/wishlist'
store.subscribe(function () {
  console.log(store.getState())
})

// store.dispatch(user.register({name: 'Indra Bayu', phone_number: '081327', email: 'k.indrabayu@gmail.com', gender: 'L', password: 'aku'}))
// setTimeout (function () {
store.dispatch(user.login({email: 'k.indrabayu@gmail.com', password: 'kmuto'}))
// setTimeout(function () {
//   console.log('ini token', token())
// store.dispatch(user.validateToken({token: '9d5e51c87294a378b3e8376d0059e012'}))
// store.dispatch(user.newPassword({token: '9d5e51c87294a378b3e8376d0059e012', password: 'komuto'}))
// store.dispatch(user.verification({token: '9d5e51c87294a378b3e8376d0059e012'}))
  // store.dispatch(user.getProfile())
// }, 4000)
// setTimeout(function (){
    // asik = localStorage.getItem('user')
    // asoy=JSON.parse(asik)
    // console.log(asoy.token)
// },6000)
// setTimeout(function (){
// store.dispatch(user.newPassword({password: "123456789"}))
// },6000)
  // store.dispatch(user.stateLogin({login: true}))
  // store.dispatch(user.loginSocial({provider_name: "Facebook", procider_uid: "12345678", access_token: "EAAViKAqZCMswBAM1UqlZBZAFRd6OyX0C5b9VpVU0mO0dKWduiZBRC2BqJ3wvHyKkJqUz53IUkr0RBByiFtWWRFcBtV3ZBUA8vSQCnbVvD76vTzuF75YtixmN5K0v00eN0u5DHfGGasSzUYWAOKYfkXglmL4DMMZB8aspE5bqN57h2sNO5CT8Nwhmz7kfbgZCBIZD"}))
  // store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
// }, 3000)
// setTimeout (function () {
//   store.dispatch(user.userAuthentication())
// },4000)
// store.dispatch(home.products())
// store.dispatch(home.search({query: 'aya'}))
store.dispatch(home.allCategory())
// store.dispatch(home.categoryList())
// store.dispatch(home.subCategory({id: 6}))
store.dispatch(wishlist.wishlist())
store.dispatch(brand.getBrand())
store.dispatch(expedition.getExpedition())
store.dispatch(location.getProvince())
// store.dispatch(location.getDistrict({province_id: 34}))
// store.dispatch(location.getSubDistrict({district_id: 3404}))
// store.dispatch(location.getVillage({sub_district_id: 3404110}))
// setTimeout(function () {
// store.dispatch(user.logout())
// }, 10000)

