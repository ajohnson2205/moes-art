import React, { Component } from 'react';


import Navbar from '../components/Navbar.js'
import Carousel from '../components/Carousel.js'
import Marketing from '../components/Marketing.js'
import Featurette from '../components/Featurette.js'
import Footer from '../components/Footer.js'


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Marketing />
        <Featurette />
        <Footer />
      </div>
    )
  }
}

export default Home;
