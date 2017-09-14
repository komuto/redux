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

export const getBuyerInvoiceDetail = createReducer(buildInitState({ invoice: {} }))
  .addReducer({
    type: actions.GET_BUYER_INVOICE_DETAIL,
    resultName: 'invoice'
  }).run()

export const addComplaint = createReducer(buildInitState({ complaint: {} }))
  .addReducer({
    type: actions.ADD_COMPLAINT,
    resultName: 'complaint'
  }).run()

export const getNewOrders = createReducer(buildInitState({ orders: [] }))
  .addReducer({
    type: actions.GET_NEW_ORDERS,
    resultName: 'orders'
  }).run()
