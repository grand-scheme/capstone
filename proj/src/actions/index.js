import * as c from './ActionTypes';

export const deleteReview = id => ({
  type: c.DELETE_REVIEW,
  id
});

export const toggleNew = () => ({
  type: c.TOGGLE_NEW
});