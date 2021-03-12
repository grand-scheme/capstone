import React from 'react';
import PropTypes from 'prop-types';

function ReviewDetail(props){
  const { review, onEditReview, onDeleteReview } = props;

  return(
    <>
      <h1>{review.restaurantName} </h1>
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;{review.rating} &mdash; {review.date} </h2>
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{review.location}</h2>
      {/* {review.address} <br /> */}
      &nbsp;&nbsp;&nbsp;&nbsp;<h2>{review.review}</h2> <br />
      <br />
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;<button onClick={()=> onEditReview(review.id)}>Edit</button>
      <button onClick={()=> onDeleteReview(review.id)}>Delete</button>
    </>
  );
}

ReviewDetail.propTypes ={
  review: PropTypes.object,
  onDeleteReview: PropTypes.func,
  onEditReview: PropTypes.func
};
export default ReviewDetail;