import * as c from '../actions/ActionTypes';

export default (state={}, action) => {
  const {
    restaurantName,
    address,
    location,
    rating,
    date,
    review,
    id,
  } = action;
  switch (action.type) {
    case c.ADD_REVIEW:
      return Object.assign({}, state, {
        [id]: {
          restaurantName,
          address,
          location,
          rating,
          date,
          review,
          id,
        }
      });
  default: 
    return state;
  }
};