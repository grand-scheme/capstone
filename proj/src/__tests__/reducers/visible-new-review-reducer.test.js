import visibleNewReviewReducer from '../../reducers/visible-new-review-reducer';
import * as c from '../../actions/ActionTypes';

describe('visibleNewReviewReducer', () => {
  
  test('should return default state if no action happens', () => {
    expect(visibleNewReviewReducer(false, { type: null} )).toEqual(false);
  });
  // 
  test('should toggle visibility of new review form', () => {
    expect(visibleNewReviewReducer(false, {type: c.TOGGLE_NEW})).toEqual(true);
  }); 
  // //
  // test('x', () => {
  //   action = {
  //   };
  //   expect(visibleNewReviewReducer({}, action)).toEqual({
  //   });
  // });
  //
});