import { put } from 'redux-saga/effects'
import * as homeActions from '../actions/home'
import * as homeApi from '../api/home'

function* categoryList (action) {
  try {
    const {data} = yield homeApi.categoryList(action)
    yield put({ type: homeActions.HOME_CATEGORY_SUCCESS, ...data })
  } catch (e) {
    yield put({ type: homeActions.HOME_CATEGORY_FAILURE })
  }
}

function* subCategory (action) {
  try {
    const {data} = yield homeApi.subCategory(action)
    yield put({ type: homeActions.HOME_SUBCATEGORY_SUCCESS, ...data })
  } catch (e) {
    yield put({ type: homeActions.HOME_SUBCATEGORY_FAILURE })
  }
}

export {
  categoryList,
  subCategory
}
