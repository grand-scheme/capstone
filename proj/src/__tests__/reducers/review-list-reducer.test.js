import reviewListReducer from '../../reducers/review-list-reducer';

describe('reviewListReducer', () => {
  test('Return default state without action passed in', () => {
    expect(reviewListReducer({}, { type: null} )).toEqual({});
  });
});