import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './bootstrap.min.css';
import './Navbar.css'


import ExhibitionTable from './ExhibitionTable.js'

import monica500px from '../images/monica500px.png'
import owl500px from '../images/owl500px.png'
import workspace500px from '../images/workspace500px.png'






class FeaturetteAbout extends Component {
  render() {
    return (




  <div className="container">



    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading-baby">About the artist.</h2>
        <p className="lead">
          Monica Johnson was born and raised on the beautiful Oregon coast, a place she still calls home with her husband, Ryan, her dogs Peanut and Ruby, and her cat Iris.
        </p>
        <p className="lead">
          Monica works in a variety of mediums including prismacolor, watercolor, gouache,  and acrylic.  She attended Portland Community College and Pacific University where she studied figure drawing, sculpture, design, and painting.
        </p>
        <p className="lead">
          Her ideas come from her nieces and nephews, her pets, her dreams, and the beautiful landscape around her. She strives to make art that will inspire children's imaginations and keep the rest of us young at heart.
        </p>
      </div>

      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" src={workspace500px} alt=" " />
        </div>
    </div>

      <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading-baby">Exhibitions.</h2>
        <ExhibitionTable />
      </div>
      <div className="col-md-5 order-md-1">
        <img className="featurette-image img-fluid mx-auto" src={monica500px} alt=" " />
      </div>
    </div>

<hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading-baby">Contact.</h2>
        <p className="lead">
          <a href="mailto:monica@moesart.net?Subject=Hello%20again" target="_top">Contact Us</a>
        </p>
      </div>

      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" src={owl500px} alt=" " />
        </div>
    </div>

<hr className="featurette-divider" />



  </div>








    )
  }
}

export default FeaturetteAbout;
