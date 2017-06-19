import * as userActions from '../actions/user'
import * as homeActions from '../actions/home'
import * as userSaga from './user'
import * as homeSaga from './home'
import { takeEvery } from 'redux-saga/effects'

function* dataSaga () {
  yield takeEvery(userActions.USER_REGISTER_REQUEST, userSaga.register)
  yield takeEvery(userActions.USER_LOGIN_REQUEST, userSaga.login)
  yield takeEvery(userActions.FORGET_PASSWORD_REQUEST, userSaga.forgetPassword)
  yield takeEvery(userActions.LOGIN_SOCIAL_REQUEST, userSaga.loginSocial)
  yield takeEvery(userActions.USER_NEWPASSWORD_REQUEST, userSaga.newPassword)
  yield takeEvery(homeActions.HOME_CATEGORY_REQUEST, homeSaga.categoryList)
  yield takeEvery(homeActions.HOME_SUBCATEGORY_REQUEST, homeSaga.subCategory)
}

export default dataSaga
