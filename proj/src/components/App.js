import React from 'react';
import ReviewControl from './ReviewControl';
import SignIn from './SignIn';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header /><br />
      <Switch>
        <Route path='/signin'>
          <br />
          <SignIn />
        </Route>
        <Route path='/'>
          <br />
          <ReviewControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
