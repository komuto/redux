import * as actions from '../actions/payment'
import { buildInitState, createReducer } from '../config'

export const getPaymentMethods = createReducer(buildInitState({ paymentMethods: [] }))
  .addReducer({
    type: actions.GET_PAYMENT_METHODS,
    resultName: 'paymentMethods'
  }).run()

export const confirmPaymentMethod = (state = initState({ confirmation: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.CONFIRM_PAYMENT_METHOD:
      return buildReducer(state, action, type, 'confirmation')
    default:
      return state
  }
}

export const confirmTransfer = (state = initState({ confirmation: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.CONFIRM_TRANSFER:
      return buildReducer(state, action, type, 'confirmation')
    default:
      return state
  }
} 

export const confirmTransfer = createReducer(buildInitState())
  .addReducer({
    type: actions.CONFIRM_TRANSFER,
    resultName: 'confirmation'
  }).run()

export const getDokuInvoice = createReducer(buildInitState({ invoice: {} }))
  .addReducer({
    type: actions.GET_DOKU_INVOICE,
    resultName: 'invoice'
  }).run()

export const payDoku = createReducer(buildInitState({ payment: {} }))
  .addReducer({
    type: actions.PAY_DOKU,
    resultName: 'payment'
  }).run()

export const withdraw = createReducer(buildInitState())
  .addReducer({
    type: actions.WITHDRAW
  }).run()
