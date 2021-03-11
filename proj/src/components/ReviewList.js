import React from 'react';
import Review from './Review';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, /* isEmpty */ } from 'react-redux-firebase'

function ReviewList(props){
  useFirestoreConnect([
    { collection: 'reviews' }
  ]);
  const reviews = useSelector(state => state.firestore.ordered.reviews);
  if (isLoaded(reviews)) {
    return (
      <>
        {reviews.map((review) => {
          return <Review 
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
        })}
      </>
    );
  } else {
    return (
      <>
        <p>( Loading... )</p>
      </>
    )
  }
}

ReviewList.propTypes = {
  // reviewList: PropTypes.object,
  onSelectReview: PropTypes.func
};
export default ReviewList;