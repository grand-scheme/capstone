import React from 'react';
import {v4} from 'uuid';

function NewReview(props){
  function handleNewReview(e){
    e.preventDefault();
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
export default NewReview;