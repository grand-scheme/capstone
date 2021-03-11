import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn(){
  const history = useHistory();

  function register(e){
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function()
      {
        history.push('/');
        history.push('/signin');
      }
    ).catch(function(error) {
        alert(error.message);
        console.log('less nice');
    });
  }

  function login(e){
    e.preventDefault();
    const email = e.target.registeredEmail.value;
    const password = e.target.registeredPassword.value;
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(){
        history.push('/');
      })
      .catch(function(error) {
        alert(error.message);
        console.log('less nice');
    });
  }
  

  return(
    <Router>
      <Switch>
        <Route path='/register'>
      <p>Register</p>
      <form onSubmit={register}>
        <input 
          type='text'
          name='email'
          placeholder='email' />
        <input 
          type='password'
          name='password'
          placeholder='password' />
        <button type='submit'>Register</button>
      </form>
      <p>Already have an account? Then please <Link to='/signin'>Sign In</Link></p>
      </Route>
      </Switch>

      <Switch>
        <Route path='/signin'>
      <p>Sign In</p>
      <form onSubmit={login}>
        <input 
          type='text'
          name='registeredEmail'
          placeholder='email' />
        <input 
          type='password'
          name='registeredPassword'
          placeholder='password' />
        <button type='submit'>Log in</button>
      </form>
      <p>No account? Then please <Link to='/register'>Register for one.</Link></p>
      </Route></Switch>
    </Router>
  );
}

export default SignIn;