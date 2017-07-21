import * as actions from '../actions/cart'
import { initState, reqState, succState, failState, typeReq, typeSucc, typeFail } from '../config'

const initCart = {
  cart: [],
  ...initState()
}

export const cart = (state = initCart, action) => {
  switch (action.type) {
    case typeReq(actions.ADD_TO_CART):
      return reqState(state)
    case typeSucc(actions.ADD_TO_CART):
      return succState(action, 'cart')
    case typeFail(actions.ADD_TO_CART):
      return failState(action, 'cart', state.cart)
    default:
      return state
  }
}
