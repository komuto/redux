import {store} from './store'
import * as user from './actions/user'
let unsubscribe = store.subscribe(function () {
  console.log(store.getState())
})

store.dispatch(user.login({email: 'admin@komuto.com', password: 'admin'}))
