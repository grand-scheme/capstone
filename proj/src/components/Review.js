import React from 'react';
import PropTypes from 'prop-types';

function Review(props){

  return (
  <>
    <div onClick = {() => props.whenClicked(props.id)}>
      {/* NOTE: UNDEFINED WHEN PROP */}
      <p>
        {props.restaurantName} <br />
        {props.address} <br />
        {props.location} <br />
        {props.rating} <br />
        {props.date} <br />
        {props.review} <br />
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