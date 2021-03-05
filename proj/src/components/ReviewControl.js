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
    // NOTE: LET STATEMENTS
    let currentlyVisible = null;

    // NOTE: IF CONDITIONALS
    if (this.state.visibleNewReview) {
      currentlyVisible = <NewReview />
    } else {
      currentlyVisible = <ReviewList />
    }
    return(
      <>
        {currentlyVisible}
      </>
    );
  }
}

export default ReviewControl;