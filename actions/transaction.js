import { buildAction, typeReq } from '../config'

export const LIST_TRANSACTIONS = 'LIST_TRANSACTIONS'
export const GET_TRANSACTION = 'GET_TRANSACTION'
export const GET_BUYER_INVOICE_DETAIL = 'GET_BUYER_INVOICE_DETAIL'
export const ADD_COMPLAINT = 'ADD_COMPLAINT'
export const GET_NEW_ORDERS = 'GET_NEW_ORDERS'
export const GET_NEW_ORDER_DETAIL = 'GET_NEW_ORDER_DETAIL'
export const GET_PROCESSING_ORDERS = 'GET_PROCESSING_ORDERS'
export const GET_PROCESSING_ORDER_DETAIL = 'GET_PROCESSING_ORDER_DETAIL'

/**
 * @state listTransactions
 */
export const listTransactions = () => buildAction(typeReq(LIST_TRANSACTIONS))

/**
 * @params id {int} transaction id
 * @state transaction
 */
export const getTransaction = params => buildAction(typeReq(GET_TRANSACTION), params)

/**
 * @params id {int} transaction id
 * @params invoiceId {int}
 * @state buyerInvoiceDetail
 */
export const getBuyerInvoiceDetail = params => buildAction(typeReq(GET_BUYER_INVOICE_DETAIL), params)

/**
 * @params id {int} transaction id
 * @params invoiceId {int}
 * @params params are the same as the api
 * @state addComplaint
 */
export const addComplaint = params => buildAction(typeReq(ADD_COMPLAINT), params)

/**
 * @state newOrders
 */
export const getNewOrders = () => buildAction(typeReq(GET_NEW_ORDERS))

/**
 * @params id {int} invoice id
 * @state newOrderDetail
 */
export const getNewOrderDetail = params => buildAction(typeReq(GET_NEW_ORDER_DETAIL), params)

/**
 * @state processingOrders
 */
export const getProcessingOrders = () => buildAction(typeReq(GET_PROCESSING_ORDERS))

/**
 * @params id {int} invoice id
 * @state processingOrderDetail
 */
export const getProcessingOrderDetail = params => buildAction(typeReq(GET_PROCESSING_ORDER_DETAIL), params)
