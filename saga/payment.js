import * as actions from '../actions/payment'
import * as apis from '../api/payment'
import { buildSaga } from '../config'

export const getPaymentMethods = buildSaga([], apis.getPaymentMethods, actions.GET_PAYMENT_METHODS)
