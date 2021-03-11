import visibleNewReviewReducer from './visible-new-review-reducer';
import reviewListReducer from './review-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  visibleNewReview: visibleNewReviewReducer,
  tempReviewList: reviewListReducer
});

export default rootReducer;