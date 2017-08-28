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

export const getBuyerDetailMessage = (state = initState({ buyerDetailMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_BUYER_DETAIL_MESSAGE:
      return buildReducer(state, action, type, 'buyerDetailMessage')
    default:
      return state
  }
}

export const getSellerDetailMessage = (state = initState({ sellerDetailMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_SELLER_DETAIL_MESSAGE:
      return buildReducer(state, action, type, 'sellerDetailMessage')
    default:
      return state
  }
}

export const getArchiveBuyerMessages = (state = initState({ archiveMessages: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_ARCHIVE_BUYER_MESSAGES:
      return buildReducer(state, action, type, 'archiveMessages')
    default:
      return state
  }
}

export const getArchiveSellerMessages = (state = initState({ archiveMessages: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_ARCHIVE_SELLER_MESSAGES:
      return buildReducer(state, action, type, 'archiveMessages')
    default:
      return state
  }
}

export const updateBuyerMessage = (state = initState({ updateMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.UPDATE_BUYER_MESSAGE:
      return buildReducer(state, action, type, 'updateMessage')
    default:
      return state
  }
}

export const updateSellerMessage = (state = initState({ updateMessage: {} }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.UPDATE_SELLER_MESSAGE:
      return buildReducer(state, action, type, 'updateMessage')
    default:
      return state
  }
}
