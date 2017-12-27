
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
          <Link to="/" className="navbar-brand">Moe's Art</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto nav-pills">
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
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
