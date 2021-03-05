import React from 'react';
import Review from './Review';

const tempReviewList = [
  {
    restaurantName: "Goldie's",
    address: '101 1st Ave',
    location: 'Seattle, WA',
    rating: '😭',
    date: '3/5/2021',
    review: "They ran out of pie..."
  },
  {
    restaurantName: "Bernie's",
    address: '210 21st Ave',
    location: 'Seattle, WA',
    rating: '🙁',
    date: '3/2/2021',
    review: "Not great."
  },
  {
    restaurantName: "Clyde's",
    address: '1011 Cherry St',
    location: 'Portland, OR',
    rating: '🥰',
    date: '2/14/2021',
    review: "Free dessert"
  }
];

function ReviewList(){
  return (
    <>
      {tempReviewList.map((review, index) =>
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