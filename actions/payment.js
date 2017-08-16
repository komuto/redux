import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'
export const CONFIRM_TRANSFER = 'CONFIRM_TRANSFER'

export const getPaymentMethods = () => buildAction(typeReq(GET_PAYMENT_METHODS))
export const confirmTransfer = params => buildAction(typeReq(CONFIRM_TRANSFER), params)
