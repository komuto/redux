import { actionType, buildAction } from '../config'

export const addAddressAction = actionType('ADD_ADDRESS')
export const updateAddressAction = actionType('UPDATE_ADDRESS')
export const deleteAddressAction = actionType('DELETE_ADDRESS')
export const addressDetailAction = actionType('ADDRESS_DETAIL')
export const listAddressAction = actionType('LIST_ADDRESS')
export const primaryAddressAction = actionType('PRIMARY_ADDRESS')

export const addAddress = params => buildAction(addAddressAction.request, params)
export const updateAddress = params => buildAction(updateAddressAction.request, params)
export const deleteAddress = params => buildAction(deleteAddressAction.request, params)
export const getAddressDetail = params => buildAction(addressDetailAction.request, params)
export const getListAddress = () => buildAction(listAddressAction.request)
export const getPrimaryAddress = () => buildAction(primaryAddressAction.request)
