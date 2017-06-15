import {store} from './store'
import * as user from './actions/user'
import {localStorage} from './localStorage'
let unsubscribe = store.subscribe(function () {
  console.log(store.getState())
})


// store.dispatch(user.register({name: 'User Skyshi', phone_number: '081327xxxxx', email: 'user@skyshi.com', gender: 'male', password: '123456'}))
// setTimeout (function () {
  store.dispatch(user.login({email: 'admin@komuto.com', password: 'admin'}))
// setTimeout(function (){
    // asik = localStorage.getItem('user')
    // asoy=JSON.parse(asik)
    // console.log(asoy.token)
// },6000)
setTimeout(function (){
store.dispatch(user.newPassword({password: "123456789"}))
},6000)
  // store.dispatch(user.stateLogin({login: true}))
  // store.dispatch(user.loginSocial({provider_name: "Facebook", procider_uid: "12345678", access_token: "EAAViKAqZCMswBAM1UqlZBZAFRd6OyX0C5b9VpVU0mO0dKWduiZBRC2BqJ3wvHyKkJqUz53IUkr0RBByiFtWWRFcBtV3ZBUA8vSQCnbVvD76vTzuF75YtixmN5K0v00eN0u5DHfGGasSzUYWAOKYfkXglmL4DMMZB8aspE5bqN57h2sNO5CT8Nwhmz7kfbgZCBIZD"}))
  // store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
// }, 3000)
// setTimeout (function () {
//   store.dispatch(user.userAuthentication())
// },4000)
