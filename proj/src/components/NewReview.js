import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

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
      <form onSubmit={handleNewReview}> {/* NOTE: UNDEFINED HANDLE */}
        <input 
          type='text'
          name='restaurantName'
          placeholder='Restaurant'
        />
        <input 
          type='text'
          name='address'
          placeholder='Address'
        />
        <input 
          type='text'
          name='location'
          placeholder='City, State'
        />
        <input 
          type='text'
          name='rating'
          placeholder='Rating'
        />
        <input 
          type='text'
          name='date'
          placeholder='Date'
        />
        <textarea 
          name='review'
          placeholder='Write your review here.'
        />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}

NewReview.propTypes = {
  onNewReview: PropTypes.func
};
export default NewReview;