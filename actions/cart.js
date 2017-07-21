import { buildAction, typeReq } from '../config'

export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = params => buildAction(typeReq(ADD_TO_CART), params)
