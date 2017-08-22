import * as actions from '../actions/message'
import { buildReducer, buildType, initState } from '../config'

export const getBuyerMessages = (state = initState({ buyerMessages: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_BUYER_MESSAGES:
      return buildReducer(state, action, type, 'buyerMessages')
    default:
      return state
  }
}

export const getSellerMessages = (state = initState({ sellerMessages: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_SELLER_MESSAGES:
      return buildReducer(state, action, type, 'sellerMessages')
    default:
      return state
  }
}

