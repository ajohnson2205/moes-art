
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './bootstrap.min.css'




class Navbar extends Component {
  render() {
    return (
      <div className="container">
      <header>
        <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          {/* <img src={logo} className="logo"/> */}
          <Link to="/" className="navbar-brand">Moe's Art</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto nav-pills">
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <a href="https://www.instagram.com/moesart5/" className="nav-link" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>


          </div>
        </nav>
      </div>
      </header>
      </div>
    );
  }
}

export default Navbar;
