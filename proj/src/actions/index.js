import * as c from './ActionTypes';

export const addReview = (review) => {
  const {
    restaurantName,
    address,
    location,
    rating,
    date,
    review,
    id
  } = review;
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