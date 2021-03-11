import reviewListReducer from '../../reducers/review-list-reducer';
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
  const testDeleteData = {
    1: {
      restaurantName: "Goldie's",
      address: '101 1st Ave',
      location: 'Seattle, WA',
      rating: '😭',
      date: '3/5/2021',
      review: "They ran out of pie...",
      id: '1'
    },
    2: {
      restaurantName: "Bernie's",
      address: '210 21st Ave',
      location: 'Seattle, WA',
      rating: '🙁',
      date: '3/2/2021',
      review: "Not great.",
      id:'2'
    }
  };
  //
  test('Return default state without action passed in', () => {
    expect(reviewListReducer({}, { type: null} )).toEqual({});
  });
  // 
  test('should remove review from list', () => {
    action = {
      type: c.DELETE_REVIEW,
      id: 1
    };
    expect(reviewListReducer(testDeleteData, action)).toEqual({
      2: {
        restaurantName: "Bernie's",
        address: '210 21st Ave',
        location: 'Seattle, WA',
        rating: '🙁',
        date: '3/2/2021',
        review: "Not great.",
        id:'2'
      },
    });
  });
  //
});