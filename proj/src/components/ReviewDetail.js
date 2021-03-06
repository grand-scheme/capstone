import React from 'react';
import PropTypes from 'prop-types';

function ReviewDetail(props){
  const { review, onDeleteReview } = props;

  return(
    <>
      {review.restaurantName} <br />
      {review.address} <br />
      {review.location} <br />
      {review.rating} <br />
      {review.date} <br />
      {review.review} <br />
      <button onClick={()=> onDeleteReview(review.id)}>Delete</button>
    </>
  );
}

ReviewDetail.propTypes ={
  review: PropTypes.object,
  onDeleteReview: PropTypes.func
};
export default ReviewDetail;