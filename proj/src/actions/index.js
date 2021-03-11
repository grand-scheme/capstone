import * as c from './ActionTypes';

export const addReview = (addedReview) => {
  const {
    restaurantName,
    address,
    location,
    rating,
    date,
    review,
    id
  } = addedReview;
  return {
    type: c.ADD_REVIEW,
    restaurantName,
    address,
    location,
    rating,
    date,
    review,
    id,
  }
}

export const deleteReview = id => ({
  type: c.DELETE_REVIEW,
  id
});