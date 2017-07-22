import * as actions from '../actions/bank'
import { initState, reducerCreator } from '../config'

const initListBank = {
  banks: [],
  ...initState()
}

const initBank = {
  bank: '',
  ...initState()
}

export const listBank = (state = initListBank, action) => reducerCreator(state, action, actions.listBankAction, 'banks')
export const getBank = (state = initBank, action) => reducerCreator(state, action, actions.getBankAction, 'bank')
