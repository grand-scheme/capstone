import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
import tempReviewList from '../data/temp-review-list'
import ReviewDetail from './ReviewDetail';

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
  handleCreateNew = () => {
    this.setState(prevState => ({
      visibleNewReview: !prevState.visibleNewReview
    }));
  }

  handleReturnToList = () => {
    this.setState({
      selectedReview: null
    });
  }

  handleNewReview = (newReview) => {
    const newTempReviewList = this.state.tempReviewList.concat(newReview);
    this.setState({
      tempReviewList: newTempReviewList, 
      visibleNewReview: false
    });
  }

  handleSelectReview = (id) => {
    const selectedReview = this.state.tempReviewList.filter(review => review.id === id)[0];
    this.setState({selectedReview: selectedReview});
  }

  handleDeleteReview = (id) => {
    const newTempReviewList = this.state.tempReviewList.filter(review => review.id !== id);
    this.setState({
      tempReviewList: newTempReviewList,
      selectedReview: null
    });
  }

  render(){
    // NOTE: LET STATEMENTS
    let currentlyVisible = null;
    let buttonText = '';
    let handleButton = null;

    // NOTE: IF CONDITIONALS
    if (this.state.selectedReview != null) {
      // SELECTS A 'REVIEW' TO GO TO DETAILS SCREEN
      currentlyVisible = <ReviewDetail 
        review = {this.state.selectedReview} 
        onDeleteReview = {this.handleDeleteReview}
      />
      buttonText = 'back'
      handleButton = this.handleReturnToList

    } else if (this.state.visibleNewReview) {
      // NAVIGATES AWAY FROM THE 'NEW REVIEW' SCREEN
      currentlyVisible = <NewReview 
        onNewReview={this.handleNewReview} />
      buttonText = 'cancel'
      handleButton = this.handleCreateNew

    } else {
      // NAVIGATES TO THE 'NEW REVIEW' SCREEN
      currentlyVisible = <ReviewList 
        reviewList={this.state.tempReviewList} 
        onSelectReview={this.handleSelectReview}
      />
      buttonText = 'new review button'
      handleButton = this.handleCreateNew
    }
    return(
      <>
        {currentlyVisible}
        <button onClick={handleButton}>{buttonText}</button>
      </>
    );
  }
}

export default ReviewControl;