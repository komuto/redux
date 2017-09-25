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

export const getOrders = createReducer(buildInitState({ orders: [] }))
  .addReducer({
    type: actions.GET_NEW_ORDERS,
    resultName: 'orders'
  })
  .addReducer({
    type: actions.GET_PROCESSING_ORDERS,
    resultName: 'orders'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDERS_BUYER,
    resultName: 'orders'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDERS_BUYER_2,
    resultName: 'orders'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDERS_SELLER,
    resultName: 'orders'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDERS_SELLER_2,
    resultName: 'orders'
  }).run()

export const getOrderDetail = createReducer(buildInitState({ orderDetail: {} }))
  .addReducer({
    type: actions.GET_NEW_ORDER_DETAIL,
    resultName: 'orderDetail'
  })
  .addReducer({
    type: actions.GET_PROCESSING_ORDER_DETAIL,
    resultName: 'orderDetail'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDER_DETAIL_BUYER,
    resultName: 'orderDetail'
  })
  .addReducer({
    type: actions.GET_COMPLAINED_ORDER_DETAIL_SELLER,
    resultName: 'orderDetail'
  }).run()

export const updateStatus = createReducer(buildInitState())
  .addReducer({
    type: actions.ACCEPT_ORDER
  })
  .addReducer({
    type: actions.REJECT_ORDER
  })
  .addReducer({
    type: actions.INPUT_AIRWAY_BILL
  })
  .addReducer({
    type: actions.UPDATE_AIRWAY_BILL
  }).run()

export const createDiscussion = createReducer(buildInitState({ discussion: {} }))
  .addReducer({
    type: actions.CREATE_COMPLAINT_DISCUSSION_BUYER,
    resultName: 'discussion'
  })
  .addReducer({
    type: actions.CREATE_COMPLAINT_DISCUSSION_SELLER,
    resultName: 'discussion'
  }).run()

export const buyerDisputeReceived = createReducer(buildInitState({ reviews: [] }))
  .addReducer({
    type: actions.BUYER_DISPUTE_RECEIVED,
    resultName: 'reviews'
  }).run()

export const sellerDisputeReceived = createReducer(buildInitState({ dispute: {} }))
  .addReducer({
    type: actions.SELLER_DISPUTE_RECEIVED,
    resultName: 'dispute'
  }).run()

export const getSales = createReducer(buildInitState({ sales: [] }))
  .addReducer({
    type: actions.GET_SALES,
    resultName: 'sales'
  }).run()

export const getSaleDetail = createReducer(buildInitState({ sale: {} }))
  .addReducer({
    type: actions.GET_SALE_DETAIL,
    resultName: 'sale'
  }).run()
