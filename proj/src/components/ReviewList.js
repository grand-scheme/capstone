import React from 'react';
import Review from './Review';
import PropTypes from 'prop-types';

function ReviewList(props){
  return (
    <>
      {props.reviewList.map((review, index) =>
        <Review 
          restaurantName={review.restaurantName}
          address={review.address}
          location={review.location}
          rating={review.rating}
          date={review.date}
          review={review.review}
          key={index}
        />
      )}
    </>
  );
}

ReviewList.propTypes = {
  reviewList: PropTypes.array
};
export default ReviewList;