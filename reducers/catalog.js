import * as actions from '../actions/catalog'
import { initState, reducerCreator } from '../config'

const initCatalog = {
  catalog: {},
  ...initState()
}

const initListCatalog = {
  catalogs: [],
  ...initState()
}

export const createCatalog = (state = initCatalog, action) => reducerCreator(state, action, actions.createCatalogAction, 'catalog')
export const updateCatalog = (state = initCatalog, action) => reducerCreator(state, action, actions.createCatalogAction, 'catalog')
export const getDetailCatalog = (state = initCatalog, action) => reducerCreator(state, action, actions.getCatalogAction, 'catalog')
export const getListCatalog = (state = initListCatalog, action) => reducerCreator(state, action, actions.getListCatalogAction, 'catalogs')
export const deleteCatalog = (state = initCatalog, action) => reducerCreator(state, action, actions.deleteCatalogAction, 'catalog')
