import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import Form from './Form';

function NewReview(props){
  function handleNewReview(e){
    e.preventDefault();
    props.onNewReview({
      id: v4(),
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
        formHandler={handleNewReview}
        buttonText="Save"
      />
    </>
  );
}

NewReview.propTypes = {
  onNewReview: PropTypes.func
};
export default NewReview;