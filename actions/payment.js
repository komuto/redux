import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'

export const getPaymentMethods = () => buildAction(typeReq(GET_PAYMENT_METHODS))
