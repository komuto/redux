import { buildAction, typeReq } from '../config'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const USER_VERIFICATION_REQUEST = 'USER_VERIFICATION_REQUEST'
export const USER_VERIFICATION_SUCCESS = 'USER_VERIFICATION_SUCCESS'
export const USER_VERIFICATION_FAILURE = 'USER_VERIFICATION_FAILURE'

export const LOGIN_SOCIAL_REQUEST = 'LOGIN_SOCIAL_REQUEST'
export const LOGIN_SOCIAL_SUCCESS = 'LOGIN_SOCIAL_SUCCESS'
export const LOGIN_SOCIAL_FAILURE = 'LOGIN_SOCIAL_FAILURE'

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE'

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'

export const USER_NEWPASSWORD_REQUEST = 'USER_NEWPASSWORD_REQUEST'
export const USER_NEWPASSWORD_SUCCESS = 'USER_NEWPASSWORD_SUCCESS'
export const USER_NEWPASSWORD_FAILURE = 'USER_NEWPASSWORD_FAILURE'

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE'

export const FORGET_PASSWORD_REQUEST = 'FORGET_PASSWORD_REQUEST'
export const FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS'
export const FORGET_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE'

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE'

export const GET_PROFILEMANAGE_REQUEST = 'GET_PROFILEMANAGE_REQUEST'
export const GET_PROFILEMANAGE_SUCCESS = 'GET_PROFILEMANAGE_SUCCESS'
export const GET_PROFILEMANAGE_FAILURE = 'GET_PROFILEMANAGE_FAILURE'

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST'
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS'
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE'

export const VALIDATE_TOKENFORGETPASSWORD_REQUEST = 'VALIDATE_TOKENFORGETPASSWORD_REQUEST'
export const VALIDATE_TOKENFORGETPASSWORD_SUCCESS = 'VALIDATE_TOKENFORGETPASSWORD_SUCCESS'
export const VALIDATE_TOKENFORGETPASSWORD_FAILURE = 'VALIDATE_TOKENFORGETPASSWORD_FAILURE'

export const USER_BALANCE_REQUEST = 'USER_BALANCE_REQUEST'
export const USER_BALANCE_SUCCESS = 'USER_BALANCE_SUCCESS'
export const USER_BALANCE_FAILURE = 'USER_BALANCE_FAILURE'

export const FAVORITE_STORE_REQUEST = 'FAVORITE_STORE_REQUEST'
export const FAVORITE_STORE_SUCCESS = 'FAVORITE_STORE_SUCCESS'
export const FAVORITE_STORE_FAILURE = 'FAVORITE_STORE_FAILURE'

export const COUNT_BUCKET_REQUEST = 'COUNT_BUCKET_REQUEST'
export const COUNT_BUCKET_SUCCESS = 'COUNT_BUCKET_SUCCESS'
export const COUNT_BUCKET_FAILURE = 'COUNT_BUCKET_FAILURE'

export const GET_BUCKET_REQUEST = 'GET_BUCKET_REQUEST'
export const GET_BUCKET_SUCCESS = 'GET_BUCKET_SUCCESS'
export const GET_BUCKET_FAILURE = 'GET_BUCKET_FAILURE'

export const ADDTO_BUCKET_REQUEST = 'ADDTO_BUCKET_REQUEST'
export const ADDTO_BUCKET_SUCCESS = 'ADDTO_BUCKET_SUCCESS'
export const ADDTO_BUCKET_FAILURE = 'ADDTO_BUCKET_FAILURE'

export const GET_PHONE_REQUEST = 'GET_PHONE_REQUEST'
export const GET_PHONE_SUCCESS = 'GET_PHONE_SUCCESS'
export const GET_PHONE_FAILURE = 'GET_PHONE_FAILURE'

export const UPDATE_PHONE_REQUEST = 'UPDATE_PHONE_REQUEST'
export const UPDATE_PHONE_SUCCESS = 'UPDATE_PHONE_SUCCESS'
export const UPDATE_PHONE_FAILURE = 'UPDATE_PHONE_FAILURE'

export const GET_USERDISCUSSION_REQUEST = 'GET_USERDISCUSSION_REQUEST'
export const GET_USERDISCUSSION_SUCCESS = 'GET_USERDISCUSSION_SUCCESS'
export const GET_USERDISCUSSION_FAILURE = 'GET_USERDISCUSSION_FAILURE'

export const LIST_FAVORITSTORE_REQUEST = 'LIST_FAVORITSTORE_REQUEST'
export const LIST_FAVORITSTORE_SUCCESS = 'LIST_FAVORITSTORE_SUCCESS'
export const LIST_FAVORITSTORE_FAILURE = 'LIST_FAVORITSTORE_FAILURE'

export const SEND_PHONEOTP_REQUEST = 'SEND_PHONEOTP_REQUEST'
export const SEND_PHONEOTP_SUCCESS = 'SEND_PHONEOTP_SUCCESS'
export const SEND_PHONEOTP_FAILURE = 'SEND_PHONEOTP_FAILURE'

export const VERIFIY_PHONE_REQUEST = 'VERIFIY_PHONE_REQUEST'
export const VERIFIY_PHONE_SUCCESS = 'VERIFIY_PHONE_SUCCESS'
export const VERIFIY_PHONE_FAILURE = 'VERIFIY_PHONE_FAILURE'

export const SEND_BANK_OTP = 'SEND_BANK_OTP'

export const IS_LOGIN = 'IS_LOGIN'

function register (params) {
  return {
    type: USER_REGISTER_REQUEST,
    ...params
  }
}

function verification (params) {
  return {
    type: USER_VERIFICATION_REQUEST,
    ...params
  }
}

function newPassword (params) {
  return {
    type: USER_NEWPASSWORD_REQUEST,
    ...params
  }
}

function changePassword (params) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    ...params
  }
}

function getProfile (params) {
  return {
    type: GET_PROFILE_REQUEST,
    ...params
  }
}

function getProfileManage () {
  return {
    type: GET_PROFILEMANAGE_REQUEST
  }
}

function login (params = {}) {
  return {
    type: USER_LOGIN_REQUEST,
    ...params
  }
}

function logout () {
  return {
    type: USER_LOGOUT_REQUEST
  }
}

function loginSocial (params = {}) {
  return {
    type: LOGIN_SOCIAL_REQUEST,
    ...params
  }
}

function forgetPassword (params = {}) {
  return {
    type: FORGET_PASSWORD_REQUEST,
    ...params
  }
}

function stateLogin (params) {
  return {
    type: IS_LOGIN,
    ...params
  }
}

function validateToken (params) {
  return {
    type: VALIDATE_TOKENFORGETPASSWORD_REQUEST,
    ...params
  }
}

function getBalance () {
  return {
    type: USER_BALANCE_REQUEST
  }
}

function updateProfile (params) {
  return {
    type: UPDATE_PROFILE_REQUEST,
    ...params
  }
}

function favoriteStore (params) {
  return {
    type: FAVORITE_STORE_REQUEST,
    ...params
  }
}

function addToBucket (params) {
  return {
    type: ADDTO_BUCKET_REQUEST,
    ...params
  }
}

function countBucket () {
  return {
    type: COUNT_BUCKET_REQUEST
  }
}

function getBucket () {
  return {
    type: GET_BUCKET_REQUEST
  }
}

function getPhone () {
  return {
    type: GET_PHONE_REQUEST
  }
}

function updatePhone (params) {
  return {
    type: UPDATE_PHONE_REQUEST,
    ...params
  }
}

function getDiscussion () {
  return {
    type: GET_USERDISCUSSION_REQUEST
  }
}

function listFavorite (params) {
  return {
    type: LIST_FAVORITSTORE_REQUEST,
    ...params
  }
}

function sendOTPPhone () {
  return {
    type: SEND_PHONEOTP_REQUEST
  }
}

function verifyPhone (params) {
  return {
    type: VERIFIY_PHONE_REQUEST,
    ...params
  }
}

export const sendOTPBank = () => buildAction(typeReq(SEND_BANK_OTP))

export {
  register,
  verification,
  login,
  logout,
  newPassword,
  changePassword,
  getProfile,
  getProfileManage,
  loginSocial,
  forgetPassword,
  stateLogin,
  validateToken,
  getBalance,
  updateProfile,
  favoriteStore,
  addToBucket,
  countBucket,
  getBucket,
  getPhone,
  updatePhone,
  getDiscussion,
  listFavorite,
  sendOTPPhone,
  verifyPhone
}
