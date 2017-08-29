import * as actions from '../actions/message'
import * as apis from '../api/message'
import { buildSaga } from '../config'

export const getBuyerMessages = buildSaga(apis.getBuyerMessages, actions.GET_BUYER_MESSAGES)
export const getSellerMessages = buildSaga(apis.getSellerMessages, actions.GET_SELLER_MESSAGES)
export const getBuyerDetailMessage = buildSaga(apis.getBuyerDetailMessage, actions.GET_BUYER_DETAIL_MESSAGE)
export const getSellerDetailMessage = buildSaga(apis.getSellerDetailMessage, actions.GET_SELLER_DETAIL_MESSAGE)
export const getArchiveBuyerMessages = buildSaga(apis.getArchiveBuyerMessages, actions.GET_ARCHIVE_BUYER_MESSAGES)
export const getArchiveSellerMessages = buildSaga(apis.getArchiveSellerMessages, actions.GET_ARCHIVE_SELLER_MESSAGES)
export const updateBuyerMessage = buildSaga(apis.updateBuyerMessage, actions.UPDATE_BUYER_MESSAGE)
export const updateSellerMessage = buildSaga(apis.updateSellerMessage, actions.UPDATE_SELLER_MESSAGE)

