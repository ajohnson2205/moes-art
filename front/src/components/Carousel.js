import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './bootstrap.min.css';
import './Navbar.css'


import bears from '../images/polarBears.jpeg'
import tree from '../images/christmasCardTree.jpeg'
import house from '../images/houseAndTruck.jpg'
import instagramScreenshot from '../images/instagramScreenshot.png'




class Carousel extends Component {
  render() {
    return (






      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active background-instagramScreenshot">
            <div className="container">
              <div className="carousel-caption">
                <h1>Visit us on Instagram.</h1>
                <p>Our newest work can always be seen on Instagram.</p>
                <p><a className="btn btn-lg btn-primary" href="https://www.instagram.com/moesart5/" target="_blank">See more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item background-polar-bears">
            <div className="container">
              <div className="carousel-caption">
                <h1>Learn about Moe.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><Link className="btn btn-lg btn-primary" to="/about" role="button">Learn more</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item background-leumur-and-stars">
            <div className="container">
              <div className="carousel-caption">
                <h1>Browse our gallery.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Browse gallery</Link></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>








    )
  }
}

export default Carousel;
