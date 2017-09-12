import * as apis from '../api/transaction'
import * as actions from '../actions/transaction'
import { buildSaga, getState } from '../config'

export const listTransactions = buildSaga(apis.listTransactions, actions.LIST_TRANSACTIONS)
export const getTransaction = buildSaga(apis.getTransaction, actions.GET_TRANSACTION,
  getState({ from: (state) => state.listTransactions.listTransactions, match: ['bucket', 'id'] }))
export const getSaldoHistory = buildSaga(apis.getSaldoHistory, actions.GET_SALDO_HISTORY)
export const getBuyerInvoiceDetail = buildSaga(apis.getBuyerInvoiceDetail, actions.GET_BUYER_INVOICE_DETAIL)
export const addComplaint = buildSaga(apis.addComplaint, actions.ADD_COMPLAINT)
