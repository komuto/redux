import { buildAction, typeReq } from '../config'

export const GET_BUYER_MESSAGES = 'GET_BUYER_MESSAGES'
export const GET_SELLER_MESSAGES = 'GET_SELLER_MESSAGES'

/**
 * @params params are the same as the api query
 * @state buyerMessages
 */
export const getBuyerMessages = params => buildAction(typeReq(GET_BUYER_MESSAGES), params)

/**
 * @params params are the same as the api query
 * @state sellerMessages
 */
export const getSellerMessages = params => buildAction(typeReq(GET_SELLER_MESSAGES), params)

