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

  // NOTE: HANDLE METHODS
  handleClick = () => {
    this.setState(prevState => ({
      visibleNewReview: !prevState.visibleNewReview
    }));
  }

  render(){
    // NOTE: LET STATEMENTS
    let currentlyVisible = null;
    let buttonText = '';

    // NOTE: IF CONDITIONALS
    if (this.state.visibleNewReview) {
      currentlyVisible = <NewReview />
      buttonText = 'cancel'
    } else {
      currentlyVisible = <ReviewList />
      buttonText = 'new review button'
    }
    return(
      <>
        {currentlyVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ReviewControl;