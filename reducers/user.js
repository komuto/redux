import * as actions from '../actions/user'
import { initState, reducerCreateor } from '../config'

const initUser = {
  user: {},
  email: '',
  token: '',
  uid: '',
  ...initState()
}

const initDiscussion = {
  discussions: [],
  ...initState()
}

const initFavoriteStore = {
  stores: [],
  ...initState()
}

const initUpdate = {
  ...initState()
}

const initBucket = {
  count: 0,
  ...initState()
}

const initGetBucket = {
  buckets: [],
  ...initState()
}

const initGetBalance = {
  balance: 0,
  ...initState()
}

const initGetPhone = {
  phone: '',
  ...initState()
}

const initValidate = {
  ...initState()
}

const initProfile = {
  verifyStatus: '',
  user: {},
  ...initState()
}

const initForgetPass = {
  email: '',
  ...initState()
}

const initLogin = {
  login: false
}

export const auth = (state = initUser, action) => reducerCreateor(state, action, actions.loginAction, 'user')
export const authSocial = (state = initUser, action) => reducerCreateor(state, action, actions.loginSocialAction, 'user')
export const newPassword = (state = initValidate, action) => reducerCreateor(state, action, actions.changePasswordAction, 'verify')
export const verify = (state = initValidate, action) => reducerCreateor(state, action, actions.verificationAction, 'verify')
export const getProfile = (state = initProfile, action) => reducerCreateor(state, action, actions.getProfileAction, 'user')
export const getProfileManage = (state = initProfile, action) => reducerCreateor(state, action, actions.getProfileManageAction, 'user')
export const updateProfile = (state = initUpdate, action) => reducerCreateor(state, action, actions.updateProfileAction, 'update')
export const register = (state = initUser, action) => reducerCreateor(state, action, actions.registerAction, 'user')
export const validateToken = (state = initValidate, action) => reducerCreateor(state, action, actions.validateTokenAction, 'validate')
export const forgetPassword = (state = initForgetPass, action) => reducerCreateor(state, action, actions.forgetPasswordAction, 'forget')
export const getBalance = (state = initGetBalance, action) => reducerCreateor(state, action, actions.getBalanceAction, 'balance')
export const changePassword = (state = initUpdate, action) => reducerCreateor(state, action, actions.changePasswordAction, 'change')
export const favoriteStore = (state = initUpdate, action) => reducerCreateor(state, action, actions.favoriteStoreAction, 'favorite')
export const addToBucket = (state = initUpdate, action) => reducerCreateor(state, action, actions.addToBucketAction, 'bucket')
export const countBucket = (state = initBucket, action) => reducerCreateor(state, action, actions.countBucketAction, 'count')
export const getPhone = (state = initGetPhone, action) => reducerCreateor(state, action, actions.getPhoneAction, 'phone')
export const getBucket = (state = initGetBucket, action) => reducerCreateor(state, action, actions.getBucketAction, 'buckets')
export const updatePhone = (state = initUpdate, action) => reducerCreateor(state, action, actions.updatePhoneAction, 'update')
export const getDiscussion = (state = initDiscussion, action) => reducerCreateor(state, action, actions.getDiscussionAction, 'discussions')
export const sendOTPPhone = (state = initValidate, action) => reducerCreateor(state, action, actions.sendOTPPhoneAction, 'otp')
export const verifyPhone = (state = initValidate, action) => reducerCreateor(state, action, actions.verifyPhoneAction, 'verify')
export const listFavoriteStore = (state = initFavoriteStore, action) => reducerCreateor(state, action, actions.listFavoriteAction, 'stores')
export function isLogin (state = initLogin, action) {
  switch (action.type) {
    case actions.IS_LOGIN:
      return {
        ...state,
        login: action.login
      }
    default:
      return state
  }
}
