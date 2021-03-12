import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';


function Header(){
  let history = useHistory();
  function signout(e){
    firebase.auth()
      .signOut()
      .then(function() {
        history.push('/signin');
        history.push('/');
      })
      .catch(function(error) {
        alert(error.message);
      });
  }
  return(
    <>
      <Link to='/'>Home</Link> --
      <Link to='/signin'>Sign In</Link> -- 
      <Link onClick={signout}>Log out</Link>
      <br />
      <br />
      <br />
    </>
  );
}

export default Header;
