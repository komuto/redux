import {store} from './store'
import * as user from './actions/user'
let unsubscribe = store.subscribe(function () {
  console.log(store.getState())
})


store.dispatch(user.register({name: 'User Skyshi', phone_number: '081327xxxxx', email: 'user@skyshi.com', gender: 'male', password: '123456'}))
setTimeout (function () {
  store.dispatch(user.login({email: 'admin@komuto.com', password: 'admin'}))
  store.dispatch(user.forgetPassword({email: 'admin@komuto.com'}))
}, 3000)
