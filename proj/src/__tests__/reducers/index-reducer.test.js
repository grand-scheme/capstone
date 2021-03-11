import rootReducer from '../../reducers/index';
import * as c from '../../actions/ActionTypes';
import { createStore } from 'redux';
let store = createStore(rootReducer);
import reviewListReducer from '../../reducers/review-list-reducer'
import visibleNewReviewReducer from '../../reducers/visible-new-review-reducer';

describe('rootReducer', () => {
  
  test('should return default state if no action happens', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      tempReviewList: {},
      visibleNewReview: false
    });
  }); 
  //
  test('check that initial state of reviewListReducer matches rootReducer', () => {
    expect(store.getState().tempReviewList).toEqual(reviewListReducer(undefined, {type:null}));
  });
  //
  test('check that initial state of visibleNewReviewReducer matches rootReducer', () => {
    expect(store.getState().visibleNewReview).toEqual(visibleNewReviewReducer(undefined, {type:null}));
  });
  //
  test('check that c.ADD_REVIEW works for reviewListReducer matches rootReducer', () => {
    const action = {
      type: c.ADD_REVIEW,
      restaurantName: "Bernie's",
      address: '210 21st Ave',
      location: 'Seattle, WA',
      rating: '🙁',
      date: '3/2/2021',
      review: "Not great.",
      id:'20'
    }
    store.dispatch(action)
    expect(store.getState().tempReviewList).toEqual(reviewListReducer(undefined, action));
  });
  //
  test('check that c.TOGGLE_NEW works for visibleNewReviewReducer and rootReducer', () => {
    const action = {
      type: c.TOGGLE_NEW
    }
    store.dispatch(action);
    expect(store.getState().visibleNewReview).toEqual(visibleNewReviewReducer(undefined, action));
  });
  //
});