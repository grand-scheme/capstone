import visibleNewReviewReducer from '../../reducers/visible-new-review-reducer';
import * as c from '../../actions/ActionTypes';

describe('visibleNewReviewReducer', () => {
  // let action;
  // const testData = {
  // }
  // const testDeleteData = {
  // };
  //
  test('should return default state if no action happens', () => {
    expect(visibleNewReviewReducer(false, { type: null} )).toEqual(false);
  });
  // 
  // test('x', () => {
  //   const { 
  //   } = testData;
  //   action = {
  //   };
  //   expect(visibleNewReviewReducer({}, action)).toEqual({

  //   });
  // });
  // //
  // test('x', () => {
  //   action = {
  //   };
  //   expect(visibleNewReviewReducer({}, action)).toEqual({
  //   });
  // });
  //
});