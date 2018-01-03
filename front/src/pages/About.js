import React, { Component } from 'react';

import './bootstrap.min.css'

import Navbar from '../components/Navbar.js'

import fu from '../images/fu.png'
import house from '../images/houseAndTruck.jpg'
import bears from '../images/polarBears.jpeg'
import Footer from '../components/Footer.js'
import FeaturetteAbout from '../components/FeaturetteAbout.js'

class About extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <br />
      <FeaturetteAbout />

    <Footer />
  </div>
    )
  }
}

export default About;
