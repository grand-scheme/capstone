import React from 'react';
import Review from './Review';

function ReviewList(){
  return (
    <Review 
      restaurantName = "Goldie's"
      address = '101 1st Ave'
      location = 'Seattle, WA'
      rating = '😭'
      date = '3/5/2021'
      review = "They ran out of pie..."
    />
  );
}

export default ReviewList;