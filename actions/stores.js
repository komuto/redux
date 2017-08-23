import { buildAction, typeReq } from '../config'

export const GET_STORE = 'GET_STORE'
export const CREATE_STORE = 'CREATE_STORE'
export const STORE_EXPEDITION_LIST = 'STORE_EXPEDITION_LIST'
export const STORE_EXPEDITION_MANAGE = 'STORE_EXPEDITION_MANAGE'
export const STORE_EXPEDITION_UPDATE = 'STORE_EXPEDITION_UPDATE'
export const PHOTO_UPLOAD = 'PHOTO_UPLOAD'
export const VERIFY_STORE = 'VERIFY_STORE'
export const MESSAGE_STORE = 'MESSAGE_STORE'
export const MESSAGE_STORE_RESET = 'MESSAGE_STORE_RESET'
export const GET_OWN_STORE = 'GET_OWN_STORE'
export const GET_STORE_PRODUCTS = 'GET_STORE_PRODUCTS'
export const GET_HIDDEN_STORE_PRODUCTS = 'GET_HIDDEN_STORE_PRODUCTS'
export const GET_STORE_CATALOG_PRODUCTS = 'GET_STORE_CATALOG_PRODUCTS'
export const UPDATE_INFORMATION = 'UPDATE_INFORMATION'
export const UPDATE_TERM = 'UPDATE_TERM'
export const GET_ADDRESS = 'GET_ADDRESS'
export const UPDATE_STORE_ADDRESS = 'UPDATE_STORE_ADDRESS'
export const CREATE_STORE_TEMP = 'CREATE_STORE_TEMP'
export const GET_STORE_DISCUSSIONS = 'GET_STORE_DISCUSSIONS'

/**
 * @params id {int} store id
 * @state stores
 */
export const getStores = params => buildAction(typeReq(GET_STORE), params)

/**
 * @params data {object} params are the same as the api
 * @state upload
 */
export const photoUpload = params => buildAction(typeReq(PHOTO_UPLOAD), params)

/**
 * @params store {array}
 * @params expedition_services {array}
 * @params user {array}
 * @params address {array}
 * @state createStore
 */
export const createStore = params => buildAction(typeReq(CREATE_STORE), params)

/**
 * @state expeditionListStore
 */
export const storeExpeditionList = () => buildAction(typeReq(STORE_EXPEDITION_LIST))

/**
 * @state expeditionStore
 */
export const storeExpeditionManage = () => buildAction(typeReq(STORE_EXPEDITION_MANAGE))

/**
 * @param code {string} otp code
 * @state verifyStore
 */
export const verifyStore = params => buildAction(typeReq(VERIFY_STORE), params)

/**
 * @params id {int} store id
 * @param params are the same as the api
 * @state sendMessageStore
 */
export const sendMessageStore = params => buildAction(typeReq(MESSAGE_STORE), params)
export const sendMessageStoreReset = () => buildAction(MESSAGE_STORE_RESET)

/**
 * @state ownStore
 */
export const getOwnStore = () => buildAction(typeReq(GET_OWN_STORE))

/**
 * @params hidden {boolean}
 * @state storeProducts
 */
export const getStoreProducts = params => buildAction(typeReq(GET_STORE_PRODUCTS), params)

/**
 * @params id {int} catalog id, optional
 * if id is omitted, will get products without catalog
 * @params hidden {boolean}
 * @state storeCatalogProducts
 */
export const getStoreCatalogProducts = params => buildAction(typeReq(GET_STORE_CATALOG_PRODUCTS), params)

/**
 * @param params are the same as the api
 * @state updateStore
 */
export const updateInformation = params => buildAction(typeReq(UPDATE_INFORMATION), params)

/**
 * @param params are the same as the api
 * @state updateStore
 */
export const updateTerm = params => buildAction(typeReq(UPDATE_TERM), params)

/**
 * @state storeAddress
 */
export const getStoreAddress = () => buildAction(typeReq(GET_ADDRESS))

/**
 * @param params are the same as the api
 * @state updateStoreAddress
 */
export const updateStoreAddress = params => buildAction(typeReq(UPDATE_STORE_ADDRESS), params)

/**
 * @state hiddenStoreProducts
 */
export const getHiddenStoreProducts = () => buildAction(typeReq(GET_HIDDEN_STORE_PRODUCTS))

/**
 * @state createStoreTemp
 */
export const createStoreTemp = params => buildAction(CREATE_STORE_TEMP, params)

/**
 * @params params are the same as the api query
 * @state storeDiscussions
 */
export const getStoreDiscussions = params => buildAction(typeReq(GET_STORE_DISCUSSIONS), params)
