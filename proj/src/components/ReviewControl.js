import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
// import tempReviewList from '../data/temp-review-list'
import ReviewDetail from './ReviewDetail';
import ReviewEdit from './ReviewEdit';
import { connect } from 'react-redux';
import Review from './Review';
import * as c from '../actions/ActionTypes';
import PropTypes from 'prop-types';

class ReviewControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // NOTE: TOGGLE FLAGS
      visibleNewReview: false,
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
    const { dispatch } = this.props; 
    const {
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id,
    } = newReview;
    const action = {
      type: c.ADD_REVIEW,
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id,
    }
    dispatch(action);
    this.setState({
      visibleNewReview: false
    });
  }

  handleSelectReview = (id) => {
    const selectedReview = this.props.tempReviewList[id];
    this.setState({selectedReview: selectedReview});
  }

  handleEditReview = () => {
    this.setState({visibleEditReview: true});
  }

  handleEditConfirmation = (editReview) => {
    const { dispatch } = this.props; 
    const {
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id,
    } = editReview;
    const action = {
      type: c.ADD_REVIEW,
      restaurantName,
      address,
      location,
      rating,
      date,
      review,
      id,
    }
    dispatch(action);
    this.setState({
      visibleEditReview: false,
      selectedReview: null
    });
  }

  handleDeleteReview = (id) => {
    const { dispatch } = this.props; 
    const action = {
      type: c.DELETE_REVIEW,
      id
    }
    dispatch(action)
    this.setState({
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
        reviewList={this.props.tempReviewList} 
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

ReviewControl.propTypes = {
  tempReviewList: PropTypes.object
};
const mapStateToProps = state => {
  return {
    tempReviewList: state
  }
}
ReviewControl = connect(mapStateToProps)(ReviewControl);
export default ReviewControl;