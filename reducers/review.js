import * as reviewActions from '../actions/review'
import { initState, reducerCreator } from '../config'

const initReview = {
  reviews: [],
  ...initState()
}

const initAdd = {
  ...initState()
}

export const getReview = (state = initReview, action) => reducerCreator(state, action, reviewActions.getReviewAction, 'reviews')
export const listReviewPagination = (state = initReview, action) => reducerCreator(state, action, reviewActions.listReviewPaginationAction, 'reviews')
export const addReview = (state = initAdd, action) => reducerCreator(state, action, reviewActions.addReviewAction, 'review')
