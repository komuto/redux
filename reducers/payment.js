import * as actions from '../actions/payment'
import { buildReducer, initState, buildType } from '../config'

export const getPaymentMethods = (state = initState({ paymentMethods: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_PAYMENT_METHODS:
      return buildReducer(state, action, type, 'paymentMethods')
    default:
      return state
  }
}

export const choosePaymentMethod = (state = initState({ cart: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.CHOOSE_PAYMENT_METHOD:
      return buildReducer(state, action, type, 'cart')
    default:
      return state
  }
}

export const payBankTransfer = (state = initState({ payment: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.PAY_BANK_TRANSFER:
      return buildReducer(state, action, type, 'payment')
    default:
      return state
  }
}