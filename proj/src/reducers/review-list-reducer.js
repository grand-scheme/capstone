import * as c from '../actions/ActionTypes';

const reviewListReducer = (state={}, action) => {
  const {
    id,
  } = action;
  switch (action.type) {
    case c.DELETE_REVIEW:
      let newState = {...state};
      delete newState[id];
      return newState;
  default: 
    return state;
  }
};

export default reviewListReducer;