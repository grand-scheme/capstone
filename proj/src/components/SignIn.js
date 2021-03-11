import React from 'react';
import firebase from "firebase/app";

function SignIn(){
  function register(e){
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(){
        console.log('nice');
    }).catch(function(error) {
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
        console.log('nice');
      })
      .catch(function(error) {
        alert(error.message);
        console.log('less nice');
    });
  }

  function signout(e){
    firebase.auth()
      .signOut()
      .then(function() {
        console.log('nice');
      })
      .catch(function(error) {
        alert(error.message);
        console.log('less nice');
      });
  }

  return(
    <>
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

      <p>Log Out</p>
      <button onClick={signout}>Log out</button>
    </>
  );
}

export default SignIn;