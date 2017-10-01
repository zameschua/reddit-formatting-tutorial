import React from 'react';

const Navbar = () => {
  // TODO: Add the page items to navbar
  return (<nav className="navbar navbar-toggleable-md navbar-light bg-primary">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand">Reddit Formatting Tutorial</a>

    </div>
  </nav>)
}

export default Navbar;