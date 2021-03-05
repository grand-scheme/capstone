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
    let buttonNewReview = null;

    // NOTE: IF CONDITIONALS
    if (this.state.visibleNewReview) {
      currentlyVisible = <NewReview />
    } else {
      currentlyVisible = <ReviewList />
      buttonNewReview = <button onClick={this.handleClick}>new review button</button>
    }
    return(
      <>
        {currentlyVisible}
        {buttonNewReview}
      </>
    );
  }
}

export default ReviewControl;