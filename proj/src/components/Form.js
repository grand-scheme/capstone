import React from 'react';
import PropTypes from 'prop-types';

function Form(props){
  return(
    <>
      <form onSubmit={props.formHandler}> 
      {/* NOTE: UNDEFINED HANDLE */}
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

Form.propTypes = {
  formHandler: PropTypes.func,
  buttonText: PropTypes.string
}
export default Form;