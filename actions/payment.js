import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'
export const CONFIRM_TRANSFER = 'CONFIRM_TRANSFER'
export const GET_DOKU_INVOICE = 'GET_DOKU_INVOICE'
export const PAY_DOKU = 'PAY_DOKU'

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
 * @state invoice
 */
export const getDokuInvoice = () => buildAction(typeReq(GET_DOKU_INVOICE))

/**
 * @param params are the same as the api
 * @state payment
 */
export const payDoku = params => buildAction(typeReq(PAY_DOKU), params)

