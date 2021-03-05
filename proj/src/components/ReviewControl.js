import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';

class ReviewControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // NOTE: TOGGLE FLAGS
      visibleNewReview: false
    };
  }
  render(){
    return(
      <>
        ¯\_(ツ)_/¯
      </>
    );
  }
}

export default ReviewControl;