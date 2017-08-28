import * as actions from '../actions/expedition'
import { buildReducer, buildType, buildInitState, createReducer } from '../config'

export const expedition = createReducer(buildInitState({ expeditions: [] }))
  .addReducer({
    type: actions.GET_EXPEDITION,
    resultName: 'expeditions'
  }).run()

export const expeditionServices = (state = buildInitState({ expeditionServices: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_EXPEDITION_SERVICES:
      return buildReducer(state, action, type, 'expeditionServices')
    default:
      return state
  }
}

export const estimatedShipping = (state = buildInitState({ charges: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.ESTIMATED_SHIPPING:
      return buildReducer(state, action, type, 'charges')
    default:
      return state
  }
}

export const shippingCharge = (state = buildInitState({ charges: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_SHIPPING_CHARGE:
      return buildReducer(state, action, type, 'charges')
    default:
      return state
  }
}

export const updateExpediton = (state = buildInitState(), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.UPDATE_EXPEDITION:
      return buildReducer(state, action, type)
    default:
      return state
  }
}

export const getStoreExpeditions = (state = buildInitState({ storeExpeditions: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_STORE_EXPEDITIONS:
      return buildReducer(state, action, type, 'storeExpeditions')
    default:
      return state
  }
}

export const manageStoreExpeditions = (state = buildInitState({ manageExpeditions: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.MANAGE_STORE_EXPEDITIONS:
      return buildReducer(state, action, type, 'manageExpeditions')
    default:
      return state
  }
}

