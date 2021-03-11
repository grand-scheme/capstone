import visibleNewReviewReducer from './visible-new-review-reducer';
import { firestoreReducer } from 'redux-firestore';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  visibleNewReview: visibleNewReviewReducer,
  firestore: firestoreReducer,
});

export default rootReducer;