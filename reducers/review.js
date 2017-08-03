import * as actions from '../actions/review'
import { buildReducer, buildType, initState } from '../config'

const initReview = {
  reviews: [],
  ...initState()
}

const initAdd = {
  ...initState()
}

function getReviews (state = initReview, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_REVIEWS:
      return buildReducer(state, action, type, 'reviews', false, true)
    default:
      return state
  }
}

function addReview (state = initAdd, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.ADD_REVIEW:
      return buildReducer(state, action, type)
    case actions.ADD_REVIEW_RESET:
      return initAdd
    default:
      return state
  }
}

export {
    getReviews,
    addReview
}
