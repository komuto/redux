import * as actions from '../actions/message'
import * as apis from '../api/message'
import { buildSaga } from '../config'

export const getBuyerMessages = buildSaga(apis.getBuyerMessages, actions.GET_BUYER_MESSAGES)
export const getSellerMessages = buildSaga(apis.getSellerMessages, actions.GET_SELLER_MESSAGES)

