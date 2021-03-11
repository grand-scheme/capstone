import rootReducer from '../../reducers/index';
import * as c from '../../actions/ActionTypes';

describe('rootReducer', () => {
  
  // test('x', () => {
  //   expect(rootReducer(false, { type: null} )).toEqual(false);
  // });
  // 
  test('should return default state if no action happens', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      tempReviewList: {},
      visibleNewReview: false
    });
  }); 
  // //
  // test('x', () => {
  //   action = {
  //   };
  //   expect(indexReducer({}, action)).toEqual({
  //   });
  // });
  //
});