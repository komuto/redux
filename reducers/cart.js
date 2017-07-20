import * as actions from '../actions/cart'
import { initState, reqState, succState, failState } from '../config'

const initCart = {
  cart: [],
  ...initState()
}

export const cart = (state = initCart, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART_REQUEST:
      return reqState(state)
    case actions.ADD_TO_CART_SUCCESS:
      return succState(action, 'cart')
    case actions.ADD_TO_CART_FAILURE:
      return failState(action, 'cart', state.cart)
    default:
      return state
  }
}
