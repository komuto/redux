import * as actions from '../actions/payment'
import { buildInitState, createReducer, succState } from '../config'

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
  })
  .addReducer({
    type: actions.BALANCE_PAYMENT
  }).run()

export const getMidtransToken = createReducer(buildInitState())
  .addReducer({
    type: actions.GET_MIDTRANS_TOKEN,
    customSuccState: (state, action) => ({ ...succState(action), token: action.data.token })
  }).run()

export const getMidtransToken2 = createReducer(buildInitState())
  .addReducer({
    type: actions.GET_MIDTRANS_TOKEN_2,
    customSuccState: (state, action) => ({ ...succState(action), token: action.data.token })
  }).run()
