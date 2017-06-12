import { takeEvery, put } from 'redux-saga/effects'
import * as user_actions from '../actions/user'
import * as user_api from '../api/user'

function* register (action) {
  try {
    const {data} = yield user_api.register(action)
    yield put({ type: user_actions.USER_REGISTER_SUCCESS, ...data.data })
  } catch (e) {
    yield put({ type: user_actions.USER_REGISTER_FAILURE })
  }
}

function* login (actions) {
  try {
    const {data} = yield user_api.login(actions)
    yield put({ type: user_actions.USER_LOGIN_SUCCESS, ...data.data })
  } catch (e) {
    yield put({ type: user_actions.USER_LOGIN_FAILURE })
  }
}

export {
  login,
  register
}
