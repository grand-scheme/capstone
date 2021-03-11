import React from 'react';
import PropTypes from 'prop-types';

function Review(props){

  return (
  <>
    <div onClick = {() => props.whenClicked(props.id)}>
      {/* NOTE: UNDEFINED WHEN PROP */}
      <p>
        <h1>{props.restaurantName} </h1>
        <h2>&nbsp;&nbsp;&nbsp;&nbsp;{props.rating} &mdash; {props.date} </h2>
        <hr />
      </p>
    </div>
  </>
  )
}

Review.propTypes = {
  restaurantName: PropTypes.string,
  address: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  date: PropTypes.string,
  review: PropTypes.string,
  id: PropTypes.string,
  whenClicked: PropTypes.func
  // add .isRequired to the ones that will be required
};

export default Review;