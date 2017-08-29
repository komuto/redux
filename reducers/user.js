import * as actions from '../actions/user'
import { reqState, succState, failState, typeReq, typeSucc, typeFail, buildReducer, buildType, buildInitState, createReducer } from '../config'

const initUser = buildInitState({
  email: '',
  token: '',
  uid: 0,
  user: {}
})

const initProfile = buildInitState({
  verifyStatus: '',
  user: {}
})

export const auth = createReducer(initUser)
  .addReducer({
    type: actions.USER_LOGIN,
    customReqState: (state, action) => ({ ...initUser, email: action.email, isLoading: true }),
    customSuccState: (state, action) => ({
      email: action.data.email,
      token: action.data.token,
      uid: action.data.id,
      user: action.data,
      ...succState(action) }),
    customFailState: (state, action) => ({ ...initUser, ...failState(action) })
  })
  .addReducer({
    type: actions.LOGIN_SOCIAL,
    customReqState: (state, action) => ({ ...initUser, email: action.email, isLoading: true }),
    customSuccState: (state, action) => ({
      email: action.data.email,
      token: action.data.token,
      uid: action.data.id,
      user: action.data,
      is_required_password: action.data.is_required_password,
      ...succState(action) }),
    customFailState: (state, action) => ({ ...initUser, ...failState(action) })
  })
  .addReducer({
    type: actions.USER_LOGOUT,
    customReqState: (state, action) => ({
      email: action.data.email,
      token: action.data.token,
      uid: action.data.id,
      user: action.data,
      ...succState(action) }),
    customSuccState: (state, action) => ({ ...initUser, ...succState(action) })
  }).run()

export const newPassword = createReducer(buildInitState())
  .addReducer({
    type: actions.USER_NEW_PASSWORD
  }).run()

export const verify = createReducer(buildInitState())
  .addReducer({
    type: actions.USER_VERIFICATION
  }).run()

export const getProfile = (state = initProfile, action) => {
  const type = buildType(action.type)
  if (type === actions.GET_PROFILE_MANAGE) {
    return { ...buildReducer(state, action, type, 'user'), verifyStatus: state.verifyStatus || '' }
  }
  switch (action.type) {
    case typeReq(actions.GET_PROFILE):
      return reqState(state)
    case typeSucc(actions.GET_PROFILE):
      return {
        verifyStatus: action.data.user.status,
        user: action.data,
        ...succState(action)
      }
    case typeFail(actions.GET_PROFILE):
      return {
        ...initProfile,
        ...failState(action)
      }
    default:
      return state
  }
}

export const updateProfile = createReducer(buildInitState({ updateProfile: {} }))
  .addReducer({
    type: actions.UPDATE_PROFILE,
    resultName: 'updateProfile'
  }).run()

export const register = createReducer(initUser)
  .addReducer({
    type: actions.USER_REGISTER,
    customReqState: (state, action) => ({ ...initUser, email: action.email, isLoading: true }),
    customSuccState: (state, action) => ({
      email: action.data.email,
      uid: action.data.id,
      user: action.data,
      token: action.data.token,
      ...succState(action) }),
    customFailState: (state, action) => ({ ...initUser, ...failState(action) })
  }).run()

export const validateToken = createReducer(buildInitState())
  .addReducer({
    type: actions.VALIDATE_TOKEN_FORGET_PASSWORD
  }).run()

export const forgetPassword = (state = buildInitState({ email: '' }), action) => {
  switch (action.type) {
    case typeReq(actions.FORGET_PASSWORD):
      return {
        ...buildInitState({ email: '' }),
        email: action.email,
        isLoading: true
      }
    case typeSucc(actions.FORGET_PASSWORD):
      return {
        email: state.email,
        ...succState(action)
      }
    case typeFail(actions.FORGET_PASSWORD):
      return {
        email: state.email,
        ...failState(action)
      }
    default:
      return state
  }
}

export const isLogin = createReducer({ login: false })
  .addReducer({
    type: actions.IS_LOGIN,
    includeNonSaga: true
  }).run()

export const getBalance = createReducer(buildInitState({ balance: 0 }))
  .addReducer({
    type: actions.USER_BALANCE,
    resultName: 'balance'
  }).run()

export const changePassword = createReducer(buildInitState())
  .addReducer({
    type: actions.CHANGE_PASSWORD
  }).run()

export const favoriteStore = createReducer(buildInitState())
  .addReducer({
    type: actions.FAVORITE_STORE
  }).run()

export const getPhone = createReducer(buildInitState({ phone: '' }))
  .addReducer({
    type: actions.GET_PHONE,
    customSuccState: (state, action) => ({ phone: action.data.phone_number, ...succState(action) })
  }).run()

export const updatePhone = createReducer(buildInitState())
  .addReducer({
    type: actions.UPDATE_PHONE
  }).run()

export const getDiscussion = createReducer(buildInitState({ discussions: [] }, true))
  .addReducer({
    type: actions.GET_USER_DISCUSSION,
    resultName: 'discussions'
  }).run()

export const sendOTPPhone = createReducer(buildInitState())
  .addReducer({
    type: actions.SEND_PHONE_OTP
  }).run()

export const verifyPhone = createReducer(buildInitState())
  .addReducer({
    type: actions.VERIFIY_PHONE
  }).run()

export const wishlist = createReducer(buildInitState({ wishlist: [] }))
  .addReducer({
    type: actions.GET_WISHLIST,
    resultName: 'wishlist'
  }).run()

export const sendOTPBank = createReducer(buildInitState())
  .addReducer({
    type: actions.SEND_BANK_OTP
  }).run()

export const listFavoriteStore = createReducer(buildInitState({ stores: [] }, true))
  .addReducer({
    type: actions.LIST_FAVORIT_STORE,
    resultName: 'stores'
  }).run()

export const alterUser = createReducer(buildInitState())
  .addReducer({
    type: actions.UPDATE_FIREBASE_REG_TOKEN
  }).run()

