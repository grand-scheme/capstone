import React from 'react';
import Review from './Review';
import PropTypes from 'prop-types';

function ReviewList(props){
  return (
    <>
      {Object.values(props.reviewList).map((review) =>
        <Review 
          whenClicked = { props.onSelectReview }
          restaurantName={review.restaurantName}
          address={review.address}
          location={review.location}
          rating={review.rating}
          date={review.date}
          review={review.review.length > 100 ? review.review.substr(0,100) + "..." : review.review }
          id={review.id}
          key={review.id}
        />
      )}
    </>
  );
}

ReviewList.propTypes = {
  reviewList: PropTypes.object,
  onSelectReview: PropTypes.func
};
export default ReviewList;