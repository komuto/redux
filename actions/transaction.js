import { buildAction, typeReq } from '../config'

export const LIST_TRANSACTIONS = 'LIST_TRANSACTIONS'

export const listTransactions = () => buildAction(typeReq(LIST_TRANSACTIONS))

