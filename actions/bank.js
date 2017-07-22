import { actionType, buildAction } from '../config'

export const listBankAction = actionType('LIST_BANK')
export const getBankAction = actionType('GET_BANK')
export const createBankAction = actionType('CREATE_BANK')

export const listBank = () => buildAction(listBankAction.request)
export const getBank = params => buildAction(getBankAction.request, params)
