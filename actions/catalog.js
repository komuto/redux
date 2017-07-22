import { actionType, buildAction } from '../config'

export const createCatalogAction = actionType('CREATE_CATALOG')
export const updateCatalogAction = actionType('UPDATE_CATALOG')
export const getCatalogAction = actionType('GET_CATALOG')
export const getListCatalogAction = actionType('GET_LISTCATALOG')
export const deleteCatalogAction = actionType('DELETE_CATALOG')

export const createCatalog = params => buildAction(createCatalogAction.request, params)
export const updateCatalog = params => buildAction(updateCatalogAction.request, params)
export const getCatalog = buildAction(getCatalogAction.request)
export const getListCatalog = buildAction(getListCatalogAction.request)
export const deleteCatalog = params => buildAction(deleteCatalogAction.request, params)
