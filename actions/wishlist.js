import { actionType, buildAction } from '../config'

export const wishlistAction = actionType('GET_WISHLIST')

export const wishlist = buildAction(wishlistAction.request)
