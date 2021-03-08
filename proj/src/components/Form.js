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
          placeholder={props.restaurantName}
        />
        <input 
          type='text'
          name='address'
          placeholder={props.address}
        />
        <input 
          type='text'
          name='location'
          placeholder={props.location}
        />
        <input 
          type='text'
          name='rating'
          placeholder={props.rating}
        />
        <input 
          type='text'
          name='date'
          placeholder={props.date}
        />
        <textarea 
          name='review'
          placeholder={props.review}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

Form.propTypes = {
  formHandler: PropTypes.func,
  buttonText: PropTypes.string,
  restaurantName: PropTypes.string,
  address: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.string,
  date: PropTypes.string,
  review: PropTypes.string
}
export default Form;