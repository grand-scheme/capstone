import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
import tempReviewList from '../data/temp-review-list'
import ReviewDetail from './ReviewDetail';
import ReviewEdit from './ReviewEdit';

class ReviewControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // NOTE: TOGGLE FLAGS
      visibleNewReview: false,
      tempReviewList: tempReviewList,
      selectedReview: null,
      visibleEditReview: false
    };
  }

  // NOTE: HANDLE METHODS
  handleCreateNew = () => {
    if (this.state.selectedReview != null) {
      this.setState({
        visibleNewReview: false,
        visibleEditReview: false,
        selectedReview: null
      });
    } else { 
      this.setState(prevState => ({
        visibleNewReview: !prevState.visibleNewReview
      }));
    }
  }

  handleReturnToList = () => {
    this.setState({
      selectedReview: null,
      visibleEditReview: false
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

  handleEditReview = () => {
    this.setState({visibleEditReview: true});
  }

  handleEditConfirmation = (review) => {
    const newTempReviewList = this.state.tempReviewList.filter(
      review => review.id !== this.state.selectedReview.id)
      .concat(review);
    this.setState({
      tempReviewList: newTempReviewList,
      visibleEditReview: false,
      selectedReview: null
    });
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
    if (this.state.visibleEditReview) {
      currentlyVisible = <ReviewEdit 
        review = {this.state.selectedReview}
        onEditReview = {this.handleEditConfirmation}
        />
      buttonText = 'Back'
      handleButton = this.handleReturnToList
    } else if (this.state.selectedReview != null) {
      // SELECTS A 'REVIEW' TO GO TO DETAILS SCREEN
      currentlyVisible = <ReviewDetail 
        review = {this.state.selectedReview} 
        onDeleteReview = {this.handleDeleteReview}
        onEditReview = {this.handleEditReview}
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