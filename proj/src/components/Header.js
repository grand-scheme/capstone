import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <>
      hello. <br />
      <Link to="/">"/"</Link> <br />
      <Link to="/signin">"/Sign In"</Link> <br />
    </>
  );
}

export default Header;