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
