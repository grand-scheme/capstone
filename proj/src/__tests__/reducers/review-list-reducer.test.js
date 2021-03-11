import reviewListReducer from '../../reducers/review-list-reducer';
import tempReviewList from '../../data/temp-review-list';
import * as c from '../../actions/ActionTypes';

describe('reviewListReducer', () => {
  let action;
  const testData = {
    restaurantName: "Bernie's",
    address: '210 21st Ave',
    location: 'Seattle, WA',
    rating: '🙁',
    date: '3/2/2021',
    review: "Not great.",
    id:'20'
  }
  test('Return default state without action passed in', () => {
    expect(reviewListReducer({}, { type: null} )).toEqual({});
  });
  // 
  test('should add review to list', () => {
    const { 
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id
    } = testData;
    action = {
      type: c.ADD_REVIEW,
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id,
    };
    expect(reviewListReducer({}, action)).toEqual({
      [id] : {
        restaurantName,
        address,
        location,
        rating,
        date,
        review,
        id,
      }
    });
  });
});