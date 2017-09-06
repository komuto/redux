import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'
export const CONFIRM_TRANSFER = 'CONFIRM_TRANSFER'
export const GET_DOKU_INVOICE = 'GET_DOKU_INVOICE'
export const PAY_DOKU = 'PAY_DOKU'
export const WITHDRAW = 'WITHDRAW'
export const GET_MIDTRANS_TOKEN = 'GET_MIDTRANS_TOKEN'
export const GET_MIDTRANS_TOKEN_2 = 'GET_MIDTRANS_TOKEN_2'

/**
 * @state paymentMethods
 */
export const getPaymentMethods = () => buildAction(typeReq(GET_PAYMENT_METHODS))

/**
 * @params id {int} bucket id
 * @params params are the same as the api
 * @state confirmation
 */
export const confirmTransfer = params => buildAction(typeReq(CONFIRM_TRANSFER), params)

/**
 * @param params are the same as the api
 * @state withdrawal
 */
export const withdraw = params => buildAction(typeReq(WITHDRAW), params)

/**
 * @params params are the same as the api query
 * @state snapToken
 */
export const getMidtransToken = params => buildAction(typeReq(GET_MIDTRANS_TOKEN), params)

/**
 * @params params are the same as the api query
 * @state snapToken2
 */
export const getMidtransToken2 = params => buildAction(typeReq(GET_MIDTRANS_TOKEN_2), params)
