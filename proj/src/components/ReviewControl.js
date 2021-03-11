import React from 'react';
import NewReview from './NewReview';
import ReviewList from './ReviewList';
import ReviewDetail from './ReviewDetail';
import ReviewEdit from './ReviewEdit';
import { connect } from 'react-redux';
import * as a from '../actions/';
import PropTypes from 'prop-types';
import { withFirestore } from 'react-redux-firebase'

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

  handleNewReview = () => {
    const { dispatch } = this.props; 
    const action = a.toggleNew();
    dispatch(action);
  }

  handleSelectReview = (id) => {
    this.props.firestore.get({collection: 'reviews', doc: id}).then((review) => {
      const firestoreReview = {
        restaurantName: review.get("restaurantName"),
        address: review.get("address"),
        location: review.get("location"),
        rating: review.get("rating"),
        date: review.get("date"),
        review: review.get("review"),
        id: review.id
      }
      this.setState({selectedReview: firestoreReview});
    });
  }

  handleEditReview = () => {
    this.setState({visibleEditReview: true});
  }

  handleEditConfirmation = () => {
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
export default withFirestore(ReviewControl);