
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import './bootstrap.min.css'


class Footer extends Component {
  render() {
    return (

      <footer className="container">
  {/* <p className="float-right"><Link to="/home">Back to top</Link></p> */}
  <p>&copy; 2018 Moe's Art</p>
</footer>

    );
  }
}

export default Footer;
