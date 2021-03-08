import React from 'react';
import Form from './Form';
import PropTypes from 'prop-types';

function ReviewEdit(props){
  const { review } = props;
  function handleEditConfirmation(e){
    e.preventDefault();
    props.onEditReview({
      id: review.id,
      restaurantName: e.target.restaurantName.value,
      address: e.target.address.value,
      location: e.target.location.value,
      rating: e.target.rating.value,
      date: e.target.date.value,
      review: e.target.review.value
    });
    console.log(e.target.rating.value);
  }

  return (
    <>
      <Form 
        buttonText='Edit Review'
        formHandler={handleEditConfirmation}
        restaurantName={review.restaurantName}
      />
    </>
  );
}

ReviewEdit.propTypes = {
  handleEditConfirmation: PropTypes.func,
  review: PropTypes.object
}
export default ReviewEdit;