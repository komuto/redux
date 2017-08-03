import * as actions from '../actions/cart'
import { buildReducer, buildType, initState } from '../config'

export const cart = (state = initState({ cart: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.ADD_TO_CART:
      return buildReducer(state, action, type, 'cart', true)
    case actions.ADD_TO_CART_RESET:
      return { ...initState(), cart: state.cart }
    case actions.GET_CART:
      return buildReducer(state, action, type, 'cart')
    case actions.CHECKOUT:
      return { ...buildReducer(state, action, type), cart: state.cart, type: 'checkout' }
    default:
      return state
  }
}

export const countCart = (state = initState({ cartCount: 0 }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.COUNT_CART:
      return buildReducer(state, action, type, 'cartCount')
    default:
      return state
  }
}

export const getPromo = (state = initState({ promo: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_PROMO:
      return buildReducer(state, action, type, 'promo')
    default:
      return state
  }
}

export const cancelPromo = (state = initState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.CANCEL_PROMO:
      return buildReducer(state, action, type)
    default:
      return state
  }
}
