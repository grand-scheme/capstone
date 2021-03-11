import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function ReviewEdit(props){
  const firestore = useFirestore();
  const { review } = props;
  function handleEditConfirmation(e){
    e.preventDefault();
    props.onEditReview();
    const updatedProperties = {
      restaurantName: e.target.restaurantName.value,
      address: e.target.address.value,
      location: e.target.location.value,
      rating: e.target.rating.value,
      date: e.target.date.value,
      review: e.target.review.value
    }
    return firestore.update({collection: 'reviews', doc: review.id }, updatedProperties)
  }

  return (
    <>
      <Form 
        buttonText='Edit Review'
        formHandler={handleEditConfirmation}
        restaurantName={review.restaurantName}
        address={review.address}
        location={review.location}
        rating={review.rating}
        date={review.date}
        review={review.review}
      />
    </>
  );
}

ReviewEdit.propTypes = {
  handleEditConfirmation: PropTypes.func,
  review: PropTypes.object
}
export default ReviewEdit;