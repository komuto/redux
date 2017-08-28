import * as actions from '../actions/message'
import { buildReducer, buildType, buildInitState } from '../config'

export const getBuyerMessages = (state = buildInitState({ buyerMessages: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_BUYER_MESSAGES:
      return buildReducer(state, action, type, 'buyerMessages')
    default:
      return state
  }
}

export const getSellerMessages = (state = buildInitState({ sellerMessages: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_SELLER_MESSAGES:
      return buildReducer(state, action, type, 'sellerMessages')
    default:
      return state
  }
}

export const getBuyerDetailMessage = (state = buildInitState({ buyerDetailMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_BUYER_DETAIL_MESSAGE:
      return buildReducer(state, action, type, 'buyerDetailMessage')
    default:
      return state
  }
}

export const getSellerDetailMessage = (state = buildInitState({ sellerDetailMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_SELLER_DETAIL_MESSAGE:
      return buildReducer(state, action, type, 'sellerDetailMessage')
    default:
      return state
  }
}

export const archiveMessage = (state = buildInitState({ archiveMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.ARCHIVE_BUYER_MESSAGE:
      return buildReducer(state, action, type, 'archiveMessage')
    case actions.ARCHIVE_SELLER_MESSAGE:
      return buildReducer(state, action, type, 'archiveMessage')
    default:
      return state
  }
}

