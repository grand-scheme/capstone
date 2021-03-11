import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('review actions', () => {
  it('deleteReview should create DELETE_REVIEW action', () => {
    expect(a.deleteReview(1)).toEqual({
      type: c.DELETE_REVIEW,
      id: 1
    });
  });
  //
  it('toggleNew should create TOGGLE_NEW action', () => {
    expect(a.toggleNew()).toEqual({
      type: c.TOGGLE_NEW
    });
  });
  //
  it('addReview should create ADD_REVIEW action', () => {
    expect(a.addReview({
      restaurantName: "Bernie's",
      address: '210 21st Ave',
      location: 'Seattle, WA',
      rating: '🙁',
      date: '3/2/2021',
      review: "Not great.",
      id:'20'
    })).toEqual({
      type: c.ADD_REVIEW,
      restaurantName: "Bernie's",
      address: '210 21st Ave',
      location: 'Seattle, WA',
      rating: '🙁',
      date: '3/2/2021',
      review: "Not great.",
      id:'20'
    });
  });
});