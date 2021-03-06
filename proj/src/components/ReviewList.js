import React from 'react';
import Review from './Review';
import tempReviewList from '../data/temp-review-list'

let list = tempReviewList
function ReviewList(){
  return (
    <>
      {list.map((review, index) =>
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

export default ReviewList;