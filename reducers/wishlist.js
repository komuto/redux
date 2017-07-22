import * as wishlistAction from '../actions/wishlist'
import { initState, reducerCreator } from '../config'

const initWishlist = {
  wishlist: [],
  ...initState()
}

export const wishlist = (state = initWishlist, action) => reducerCreator(state, action, wishlistAction.wishlistAction, 'wishlist')
