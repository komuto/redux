import * as actions from '../actions/payment'
import * as apis from '../api/payment'
import { buildSaga } from '../config'

export const getPaymentMethods = buildSaga(apis.getPaymentMethods, actions.GET_PAYMENT_METHODS)
export const confirmTransfer = buildSaga(apis.confirmTransfer, actions.CONFIRM_TRANSFER)
export const getMidtransToken = buildSaga(apis.getMidtransToken, actions.GET_MIDTRANS_TOKEN)
export const getMidtransToken2 = buildSaga(apis.getMidtransToken, actions.GET_MIDTRANS_TOKEN_2)
export const balancePayment = buildSaga(apis.balancePayment, actions.BALANCE_PAYMENT)
