import React from 'react';

function Review(){
  const restaurantName = "Goldie's";
  const address = '101 1st Ave';
  const location = 'Seattle, WA';
  const rating = '😭';
  const date = '3/5/2021';
  const review = "They ran out of pie...";

  return (
  <>
    <p>
      {restaurantName} <br />
      {address} <br />
      {location} <br />
      {rating} <br />
      {date} <br />
      {review} <br />
    </p>
  </>
  )
}

export default Review;