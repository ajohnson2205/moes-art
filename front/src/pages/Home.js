import React, { Component } from 'react';


import Navbar from '../components/Navbar.js'
import Carousel from '../components/Carousel.js'


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <div className="container test">

        </div>

      </div>
    )
  }
}

export default Home;
