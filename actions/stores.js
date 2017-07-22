import { actionType, buildAction } from '../config'

export const getStoresAction = actionType('GET_STORE')
export const createStoreAction = actionType('CREATE_STORE')
export const storeExpeditionListAction = actionType('STORE_EXPEDITION_LIST')
export const storeExpeditionManageAction = actionType('STORE_EXPEDITION_MANAGE')
export const photoUploadAction = actionType('PHOTO_UPLOAD')
export const storeUpdateExpeditionAction = actionType('STORE_UPDATEEXPEDITION')
export const verifyStoreAction = actionType('VERIFY_STORE')
export const sendMessageStoreAction = actionType('MESSAGE_STORE')

export const getStores = params => buildAction(getStoresAction.request, params)
export const createStore = params => buildAction(createStoreAction.request, params)
export const storeExpeditionList = () => buildAction(storeExpeditionListAction.request)
export const storeExpeditionManage = () => buildAction(storeExpeditionManageAction.request)
export const photoUpload = params => buildAction(photoUploadAction.request, params)
export const storeUpdateExpedition = params => buildAction(storeUpdateExpeditionAction.request, params)
export const verifyStore = params => buildAction(verifyStoreAction.request, params)
export const sendMessageStore = params => buildAction(sendMessageStoreAction.request, params)
