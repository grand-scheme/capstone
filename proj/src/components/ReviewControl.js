import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
import ReviewDetail from './ReviewDetail';
import ReviewEdit from './ReviewEdit';
import { connect } from 'react-redux';
import * as a from '../actions/';
import PropTypes from 'prop-types';

class ReviewControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // NOTE: TOGGLE FLAGS
      selectedReview: null,
      visibleEditReview: false
    };
  }

  // NOTE: HANDLE METHODS
  handleClick = () => {
    if (this.state.selectedReview != null) {
      this.setState({
        visibleEditReview: false,
        selectedReview: null
      });
    } else { 
      const { dispatch } = this.props; 
      const action = a.toggleNew();
      dispatch(action);
    }
  }

  handleNewReview = (newReview) => {
    const { dispatch } = this.props; 
    const action = a.addReview(newReview);
    dispatch(action);
    const action2 = a.toggleNew();
    dispatch(action2);
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
    const action = a.addReview(editReview);
    dispatch(action);
    this.setState({
      visibleEditReview: false,
      selectedReview: null
    });
  }

  handleDeleteReview = (id) => {
    const { dispatch } = this.props; 
    const action = a.deleteReview(id);
    dispatch(action)
    this.setState({
      selectedReview: null
    });
  }

  render(){
    // NOTE: LET STATEMENTS
    let currentlyVisible = null;
    let buttonText = '';

    // NOTE: IF CONDITIONALS
    if (this.state.visibleEditReview) {
      currentlyVisible = <ReviewEdit 
        review = {this.state.selectedReview}
        onEditReview = {this.handleEditConfirmation}
        />
      buttonText = 'Back'
    } else if (this.state.selectedReview != null) {
      // SELECTS A 'REVIEW' TO GO TO DETAILS SCREEN
      currentlyVisible = <ReviewDetail 
        review = {this.state.selectedReview} 
        onDeleteReview = {this.handleDeleteReview}
        onEditReview = {this.handleEditReview}
      />
      buttonText = 'back'

    } else if (this.props.visibleNewReview) {
      // NAVIGATES AWAY FROM THE 'NEW REVIEW' SCREEN
      currentlyVisible = <NewReview 
        onNewReview={this.handleNewReview} />
      buttonText = 'cancel'
    } else {
      // NAVIGATES TO THE 'NEW REVIEW' SCREEN
      currentlyVisible = <ReviewList 
        reviewList={this.props.tempReviewList} 
        onSelectReview={this.handleSelectReview}
      />
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

ReviewControl.propTypes = {
  tempReviewList: PropTypes.object,
  visibleNewReview: PropTypes.bool
};
const mapStateToProps = state => {
  return {
    tempReviewList: state.tempReviewList,
    visibleNewReview: state.visibleNewReview
  }
}
ReviewControl = connect(mapStateToProps)(ReviewControl);
export default ReviewControl;