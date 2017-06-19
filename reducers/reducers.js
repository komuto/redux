import { combineReducers } from 'redux'
import * as storage from 'redux-storage'
import * as userReducers from './user'
import * as homeReducers from './home'

const komutoApps = storage.reducer(combineReducers({
  user: userReducers.auth,
  social: userReducers.authSocial,
  register: userReducers.register,
  forgetPassword: userReducers.forgetPassword,
  isLogin: userReducers.isLogin,
  category: homeReducers.categoryList,
  subCategory: homeReducers.subCategory
}))

export default komutoApps
