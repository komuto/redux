import { actionType, buildAction } from '../config'

export const getExpeditionAction = actionType('GET_EXPEDITION')
export const getServicesAction = actionType('GET_SEFVICES')
export const getShippingChargeAction = actionType('GET_SHIPPING_CHARGE')
export const estimatedShippingAction = actionType('ESTIMATED_SHIPPING')
export const updateExpeditionAction = actionType('UPDATE_EXPEDITION')

export const getExpedition = buildAction(getExpeditionAction.request)
export const getServices = buildAction(getServicesAction.request)
export const estimatedShipping = params => buildAction(estimatedShippingAction.request, params)
export const getShippingCharge = params => buildAction(getShippingChargeAction.request, params)
export const updateExpedition = params => buildAction(updateExpeditionAction.request, params)
