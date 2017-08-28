import * as actions from '../actions/user'
import { reqState, succState, failState, typeReq, typeSucc, typeFail, buildReducer, buildType, buildInitState } from '../config'

const initUser = {
  email: '',
  token: '',
  uid: 0,
  user: {},
  ...buildInitState()
}

const initProfile = {
  verifyStatus: '',
  user: {},
  ...buildInitState()
}

export const auth = (state = initUser, action) => {
  switch (action.type) {
    case typeReq(actions.USER_LOGIN):
      return {
        ...initUser,
        email: action.email,
        isLoading: true
      }
    case typeSucc(actions.USER_LOGIN):
      return {
        email: action.data.email,
        token: action.data.token,
        uid: action.data.id,
        user: action.data,
        ...succState(action)
      }
    case typeFail(actions.USER_LOGIN):
      return {
        email: '',
        token: '',
        uid: 0,
        user: {},
        ...failState(action)
      }
    case typeReq(actions.LOGIN_SOCIAL):
      return {
        ...initUser,
        email: action.email,
        isLoading: true
      }
    case typeSucc(actions.LOGIN_SOCIAL):
      return {
        email: action.data.email,
        token: action.data.token,
        uid: action.data.id,
        user: action.data,
        is_required_password: action.data.is_required_password,
        ...succState(action)
      }
    case typeFail(actions.LOGIN_SOCIAL):
      return {
        email: '',
        token: '',
        uid: 0,
        user: {},
        ...failState(action)
      }
    case actions.USER_LOGOUT:
      return {
        ...initUser,
        message: action.message,
        status: action.code,
        isFound: true
      }
    default:
      return state
  }
}

export const newPassword = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.USER_NEW_PASSWORD:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const verify = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.USER_VERIFICATION:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

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

export const updateProfile = (state = buildInitState({ updateProfile: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.UPDATE_PROFILE:
      return buildReducer(state, action, type, 'updateProfile')
    default:
      return state
  }
}

export const register = (state = initUser, action) => {
  switch (action.type) {
    case typeReq(actions.USER_REGISTER):
      return {
        ...initUser,
        email: action.email,
        isLoading: true
      }
    case typeSucc(actions.USER_REGISTER):
      return {
        email: action.data.email,
        uid: action.data.id,
        user: action.data,
        token: action.data.token,
        ...succState(action)
      }
    case typeFail(actions.USER_REGISTER):
      return {
        ...initUser,
        ...failState(action)
      }
    default:
      return state
  }
}

export const validateToken = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.VALIDATE_TOKEN_FORGET_PASSWORD:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

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

export const isLogin = (state = { login: false }, action) => {
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

export const getBalance = (state = buildInitState({ balance: 0 }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.USER_BALANCE:
      return buildReducer(state, action, type, 'balance')
    default:
      return state
  }
}

export const changePassword = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.CHANGE_PASSWORD:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const favoriteStore = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.FAVORITE_STORE:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const getPhone = (state = buildInitState({ phone: '' }), action) => {
  switch (action.type) {
    case typeReq(actions.GET_PHONE):
      return reqState(state)
    case typeSucc(actions.GET_PHONE):
      return {
        count: action.data.phone_number,
        ...succState(action)
      }
    case typeFail(actions.COUNT_BUCKET):
      return {
        ...state,
        ...failState(action)
      }
    default:
      return state
  }
}

export const updatePhone = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.UPDATE_PHONE:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const getDiscussion = (state = buildInitState({ discussions: [] }, true), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_USER_DISCUSSION:
      return buildReducer(state, action, type, 'discussions', true)
    default:
      return state
  }
}

export const sendOTPPhone = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.SEND_PHONE_OTP:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const verifyPhone = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.VERIFIY_PHONE:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const wishlist = (state = buildInitState({ wishlist: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_WISHLIST:
      return buildReducer(state, action, type, 'wishlist')
    default:
      return state
  }
}

export const sendOTPBank = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.SEND_BANK_OTP:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const listFavoriteStore = (state = buildInitState({ stores: [] }, true), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.LIST_FAVORIT_STORE:
      return buildReducer(state, action, type, 'stores', true)
    default:
      return state
  }
}
