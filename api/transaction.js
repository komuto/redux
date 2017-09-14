import { authApiKomuto } from './api'

export const listTransactions = () => {
  const axios = authApiKomuto()
  return axios.get('transactions')
}

export const getTransaction = ({ id }) => {
  const axios = authApiKomuto()
  return axios.get(`transactions/${id}`)
}

export const getBuyerInvoiceDetail = ({ id, invoiceId }) => {
  const axios = authApiKomuto()
  return axios.get(`transactions/${id}/invoices/${invoiceId}`)
}

export const addComplaint = ({ id, invoiceId, ...data }) => {
  const axios = authApiKomuto()
  return axios.post(`transactions/${id}/invoices/${invoiceId}/dispute`, data)
}

export const getNewOrders = () => {
  const axios = authApiKomuto()
  return axios.get('new-orders')
}

export const getNewOrderDetail = ({ id }) => {
  const axios = authApiKomuto()
  return axios.get(`invoices/${id}/new-order-detail`)
}

export const getProcessingOrders = () => {
  const axios = authApiKomuto()
  return axios.get('processing-orders')
}

export const getProcessingOrderDetail = ({ id }) => {
  const axios = authApiKomuto()
  return axios.get(`invoices/${id}/processing-order-detail`)
}
