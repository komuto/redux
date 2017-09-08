import * as actions from '../actions/transaction'
import { buildInitState, createReducer } from '../config'

export const listTransactions = createReducer(buildInitState({ listTransactions: [] }))
  .addReducer({
    type: actions.LIST_TRANSACTIONS,
    resultName: 'listTransactions'
  }).run()

export const getTransaction = createReducer(buildInitState({ transaction: {} }))
  .addReducer({
    type: actions.GET_TRANSACTION,
    resultName: 'transaction'
  }).run()

export const getSaldoHistory = createReducer(buildInitState({ history: [] }))
  .addReducer({
    type: actions.GET_SALDO_HISTORY,
    resultName: 'history'
  }).run()

export const getBuyerInvoiceDetail = createReducer(buildInitState({ invoice: {} }))
  .addReducer({
    type: actions.GET_BUYER_INVOICE_DETAIL,
    resultName: 'invoice'
  }).run()

export const addTransactionReviews = createReducer(buildInitState({ reviews: [] }))
  .addReducer({
    type: actions.ADD_TRANSACTION_REVIEWS,
    resultName: 'reviews'
  }).run()
