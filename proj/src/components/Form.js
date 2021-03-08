import React from 'react';
import PropTypes from 'prop-types';

function Form(props){
  return(
    <>
      <form onSubmit={props.formHandler}> 
        <input 
          type='text'
          name='restaurantName'
          placeholder={props.restaurantName}
        />
        <br />
        <input 
          type='text'
          name='address'
          placeholder={props.address}
        />
        <br />
        <input 
          type='text'
          name='location'
          placeholder={props.location}
        />
        <br />
        <input 
          type='text'
          name='rating'
          placeholder={props.rating}
        />
        <br />
        <input 
          type='text'
          name='date'
          placeholder={props.date}
        />
        <br />
        <textarea 
          name='review'
          placeholder={props.review}
        />
        <br />
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