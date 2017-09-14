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

export const getNewOrderDetail = createReducer(buildInitState({ orderDetail: {} }))
  .addReducer({
    type: actions.GET_NEW_ORDER_DETAIL,
    resultName: 'orderDetail'
  }).run()

export const getProcessingOrders = createReducer(buildInitState({ orders: [] }))
  .addReducer({
    type: actions.GET_PROCESSING_ORDERS,
    resultName: 'orders'
  }).run()

export const getProcessingOrderDetail = createReducer(buildInitState({ orderDetail: {} }))
  .addReducer({
    type: actions.GET_PROCESSING_ORDER_DETAIL,
    resultName: 'orderDetail'
  }).run()

export const updateStatus = createReducer(buildInitState())
  .addReducer({
    type: actions.ACCEPT_ORDER
  })
  .addReducer({
    type: actions.REJECT_ORDER
  }).run()
