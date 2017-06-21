import { put } from 'redux-saga/effects'
import * as userActions from '../actions/user'
import * as userApi from '../api/user'

const error = {
  message: 'Your device is offline',
  code: 'ENOENT',
  isOnline: false
}

function * register (action) {
  try {
    const {data} = yield userApi.register(action)
    yield put({ type: userActions.USER_REGISTER_SUCCESS, ...data })
  } catch (e) {
    const data = e.response
    if (data !== undefined) {
      const {data} = e.response
      data.isOnline = true
      yield put({ type: userActions.USER_REGISTER_FAILURE, ...data })
    } else {
      yield put({ type: userActions.USER_REGISTER_FAILURE, ...error })
    }
  }
}

function * login (action) {
  try {
    const {data} = yield userApi.login(action)
    yield put({ type: userActions.USER_LOGIN_SUCCESS, ...data })
  } catch (e) {
    const data = e.response
    if (data !== undefined) {
      const {data} = e.response
      data.isOnline = true
      yield put({ type: userActions.USER_LOGIN_FAILURE, ...data })
    } else {
      yield put({ type: userActions.USER_LOGIN_FAILURE, ...error })
    }
  }
}

function * forgetPassword (action) {
  try {
    const {data} = yield userApi.forgetPassword(action)
    yield put({ type: userActions.FORGET_PASSWORD_SUCCESS, ...data })
  } catch (e) {
    const data = e.response
    if (data !== undefined) {
      const {data} = e.response
      data.isOnline = true
      yield put({ type: userActions.FORGET_PASSWORD_FAILURE, ...data })
    } else {
      yield put({ type: userActions.FORGET_PASSWORD_FAILURE, ...error })
    }
  }
}

function * loginSocial (action) {
  try {
    const {data} = yield userApi.loginSocial(action)
    yield put({ type: userActions.LOGIN_SOCIAL_SUCCESS, ...data })
  } catch (e) {
    const data = e.response
    if (data !== undefined) {
      const {data} = e.response
      data.isOnline = true
      yield put({ type: userActions.LOGIN_SOCIAL_FAILURE, ...data })
    } else {
      yield put({ type: userActions.LOGIN_SOCIAL_FAILURE, ...error })
    }
  }
}

function * newPassword (action) {
  try {
    const {data} = yield userApi.newPassword(action)
    yield put({ type: userActions.USER_NEWPASSWORD_SUCCESS, ...data })
  } catch (e) {
    const data = e.response
    if (data !== undefined) {
      const {data} = e.response
      data.isOnline = true
      yield put({ type: userActions.USER_NEWPASSWORD_FAILURE, ...data })
    } else {
      yield put({ type: userActions.USER_NEWPASSWORD_FAILURE, ...error })
    }
  }
}

export {
  login,
  register,
  forgetPassword,
  loginSocial,
  newPassword
}
