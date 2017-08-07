import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'
export const CHOOSE_PAYMENT_METHOD = 'CHOOSE_PAYMENT_METHOD'

export const getPaymentMethods = () => buildAction(typeReq(GET_PAYMENT_METHODS))
export const choosePaymentMethod = params => buildAction(typeReq(CHOOSE_PAYMENT_METHOD), params)
