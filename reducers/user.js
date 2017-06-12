import * as actions from '../actions/user'

const initUser = {
  email: '',
  token: '',
  uid: '',
  user: {},
}

function auth (state = initUser, action) {
  // console.log(action.type)
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return {
        ...state,
        email: action.email,
        token: '',
        uid: 0,
        user: {}
      }
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        email: action.email,
        uid: action.id,
        user: action
      }
    case actions.USER_REGISTER_FAILURE:
      return {
        ...state,
        email: '',
        token: '',
        uid: 0,
        user: {}
      }
    case actions.USER_LOGIN_REQUEST:
      return {
        ...state,
        email: action.email,
        token: '',
        uid: 0,
        user: {}
      }
    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        email: action.email,
        token: action.token,
        uid: action.id,
        user: action
      }
    case actions.USER_LOGIN_FAILURE:
      return {
        ...state,
        email: '',
        token: '',
        uid: 0,
        user: {}
      }
    default:
      return state
  }
}

export {
  auth
}
