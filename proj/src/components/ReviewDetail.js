import React from 'react';
import PropTypes from 'prop-types';

function ReviewDetail(props){
  const { review } = props;

  return(
    <>
      {review.restaurantName} <br />
      {review.address} <br />
      {review.location} <br />
      {review.rating} <br />
      {review.date} <br />
      {review.review} <br />
    </>
  );
}

ReviewDetail.propTypes ={
  review: PropTypes.object
};
export default ReviewDetail;