import { buildAction, typeReq } from '../config'

export const GET_PAYMENT_METHODS = 'GET_PAYMENT_METHODS'
export const CHOOSE_PAYMENT_METHOD = 'CHOOSE_PAYMENT_METHOD'
export const PAY_BANK_TRANSFER = 'PAY_BANK_TRANSFER'

export const getPaymentMethods = () => buildAction(typeReq(GET_PAYMENT_METHODS))
export const choosePaymentMethod = params => buildAction(typeReq(CHOOSE_PAYMENT_METHOD), params)
export const payBankTransfer = params => buildAction(typeReq(PAY_BANK_TRANSFER), params)
