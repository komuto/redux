import * as storeActions from '../actions/stores'
import { initState, reducerCreator } from '../config'

const initStore = {
  store: {},
  ...initState()
}

const initExpedition = {
  expeditions: [],
  ...initState()
}

const initVerify = {
  ...initState()
}

const initUpload = {
  payload: [],
  ...initState()
}

export const stores = (state = initStore, action) => reducerCreator(state, action, storeActions.getStoresAction, 'store')
export const createStore = (state = initStore, action) => reducerCreator(state, action, storeActions.createStoreAction, 'store')
export const expeditionListStore = (state = initExpedition, action) => reducerCreator(state, action, storeActions.storeExpeditionListAction, 'expeditions')
export const expeditionStore = (state = initExpedition, action) => reducerCreator(state, action, storeActions.storeExpeditionManageAction, 'expeditions')
export const photoUpload = (state = initUpload, action) => reducerCreator(state, action, storeActions.photoUploadAction, 'payload')
export const verifyStore = (state = initVerify, action) => reducerCreator(state, action, storeActions.verifyStoreAction, 'verify')
export const sendMessageStore = (state = initStore, action) => reducerCreator(state, action, storeActions.sendMessageStoreAction, 'store')
