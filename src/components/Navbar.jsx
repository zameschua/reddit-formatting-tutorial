import React from 'react';

const Navbar = () => {
  return (<nav className="navbar navbar-toggleable-md navbar-light bg-primary">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
        </ul>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>)
}

export default Navbar;