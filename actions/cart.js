import { actionType, buildAction } from '../config'

export const addToCartAction = actionType('ADD_TO_CART')

export const addToCart = params => buildAction(addToCartAction.request, params)
