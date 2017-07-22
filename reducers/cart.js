import * as actions from '../actions/cart'
import { initState, reducerCreator } from '../config'

const initCart = {
  cart: [],
  ...initState()
}

export const cart = (state = initCart, action) => reducerCreator(state, action, actions.addToCartAction, 'cart')
