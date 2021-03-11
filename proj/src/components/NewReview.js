import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import { useFirestore } from 'react-redux-firebase'

function NewReview(props){
  const firestore = useFirestore();
  function addReviewToFirestore(e){
    e.preventDefault();
    props.onNewReview();
    return firestore.collection('reviews').add(
      {
        restaurantName: e.target.restaurantName.value,
        address: e.target.address.value,
        location: e.target.location.value,
        rating: e.target.rating.value,
        date: e.target.date.value,
        review: e.target.review.value
      }
    );
  }

  return (
    <>
      <Form 
        formHandler={addReviewToFirestore}
        buttonText='Save'
        restaurantName='Restaurant Name'
        address='Street Address / Intersection'
        location='City, State'
        rating='🙂?'
        date='Date'
        review='Write your review here.'
      />
    </>
  );
}

NewReview.propTypes = {
  onNewReview: PropTypes.func
};
export default NewReview;