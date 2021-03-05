import React from 'react';

function Review(props){
  // const restaurantName = "Goldie's";
  // const address = '101 1st Ave';
  // const location = 'Seattle, WA';
  // const rating = '😭';
  // const date = '3/5/2021';
  // const review = "They ran out of pie...";

  return (
  <>
    <p>
      {props.restaurantName} <br />
      {props.address} <br />
      {props.location} <br />
      {props.rating} <br />
      {props.date} <br />
      {props.review} <br />
    </p>
  </>
  )
}

export default Review;