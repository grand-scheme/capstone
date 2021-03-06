import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
import tempReviewList from '../data/temp-review-list'

class ReviewControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // NOTE: TOGGLE FLAGS
      visibleNewReview: false,
      tempReviewList: tempReviewList,
      selectedReview: null
    };
  }

  // NOTE: HANDLE METHODS
  handleClick = () => {
    this.setState(prevState => ({
      visibleNewReview: !prevState.visibleNewReview
    }));
  }

  handleNewReview = (newReview) => {
    const newTempReviewList = this.state.tempReviewList.concat(newReview);
    this.setState({
      tempReviewList: newTempReviewList, 
      visibleNewReview: false
    });
  }

  render(){
    // NOTE: LET STATEMENTS
    let currentlyVisible = null;
    let buttonText = '';

    // NOTE: IF CONDITIONALS
    if (this.state.visibleNewReview) {
      currentlyVisible = <NewReview onNewReview={this.handleNewReview} />
      buttonText = 'cancel'
    } else {
      currentlyVisible = <ReviewList reviewList={this.state.tempReviewList} />
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