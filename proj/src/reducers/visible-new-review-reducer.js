import * as c from '../actions/ActionTypes'
const visibleNewReviewReducer = (state = false, action) => {
  switch(action.type) {
    case c.TOGGLE_NEW:
      return !state;
    default:
      return state;
  }
};

export default visibleNewReviewReducer;