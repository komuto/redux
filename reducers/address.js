import * as actions from '../actions/address'
import { initState, reducerCreator } from '../config'

const initAddress = {
  address: {},
  ...initState()
}

const initListAddress = {
  addresses: [],
  ...initState()
}
export const addAddress = (state = initAddress, action) => reducerCreator(state, action, actions.addAddressAction, 'address')
export const address = (state = initAddress, action) => reducerCreator(state, action, actions.addressDetailAction, 'address')
export const primaryAddress = (state = initAddress, action) => reducerCreator(state, action, actions.primaryAddressAction, 'address')
export const listAddress = (state = initListAddress, action) => reducerCreator(state, action, actions.listAddressAction, 'addresses')
export const updateAddress = (state = initAddress, action) => reducerCreator(state, action, actions.updateAddressAction, 'address')
export const deleteAddress = (state = initAddress, action) => reducerCreator(state, action, actions.deleteAddressAction, 'address')
