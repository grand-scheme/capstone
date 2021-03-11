import reviewListReducer from './review-list-reducer';
import visibleNewReviewReducer from './visible-new-review-reducer';
import { firestoreReducer } from 'redux-firestore';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  visibleNewReview: visibleNewReviewReducer,
  tempReviewList: reviewListReducer,
  firestore: firestoreReducer,
});

export default rootReducer;