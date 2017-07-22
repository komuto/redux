import { actionType, buildAction } from '../config'

export const getReviewAction = actionType('GET_REVIEW')
export const listReviewPaginationAction = actionType('LIST_REVIEW')
export const addReviewAction = actionType('ADD_REVIEW')

export const getReview = params => buildAction(getReviewAction.request, params)
export const listReviewPagination = params => buildAction(listReviewPaginationAction.request, params)
export const addReview = params => buildAction(addReviewAction.request, params)
