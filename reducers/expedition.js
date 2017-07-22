import * as expeditionActions from '../actions/expedition'
import { initState, reducerCreator } from '../config'

const initExpedition = {
  expeditions: [],
  ...initState()
}

const initCharge = {
  charges: [],
  ...initState()
}

const initUpdate = {
  ...initState()
}

export const expedition = (state = initExpedition, action) => reducerCreator(state, action, expeditionActions.getExpeditionAction, 'expeditions')
export const expeditionServices = (state = initExpedition, action) => reducerCreator(state, action, expeditionActions.getServicesAction, 'expeditions')
export const estimatedShipping = (state = initCharge, action) => reducerCreator(state, action, expeditionActions.estimatedShippingAction, 'charges')
export const shippingCharge = (state = initCharge, action) => reducerCreator(state, action, expeditionActions.getShippingChargeAction, 'charges')
export const updateExpediton = (state = initUpdate, action) => reducerCreator(state, action, expeditionActions.updateExpeditionAction, 'expedition')
