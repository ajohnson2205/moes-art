import React, { Component } from 'react';

import './bootstrap.min.css'

import Navbar from '../components/Navbar.js'

import tree from '../images/christmasCardTree.jpeg'
import house from '../images/houseAndTruck.jpg'
import bears from '../images/polarBears.jpeg'

class About extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <br />

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
          <div classname="col-sm-6 col-md-4 col-lg-3">
            <h2>Art Title</h2>
            <blockquote className="blockquote">


            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
              </p>
                </blockquote>

<blockquote className="blockquote">
<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>

          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <img src={house} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default About;
