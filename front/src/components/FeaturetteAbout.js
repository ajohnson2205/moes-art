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


          Hello! My name is Monica Deatherage, and I am a freelance illustrator based on the Oregon coast. 

          I create colorful, whimsical illustrations. I love color and texture; and work with an array of materials, most often watercolor, colored pencil, and graphite. With my art I explore the world through the eyes of the kid inside me; a dorky, sweet, animal-loving kid who wants to find all the good in the world. I try to capture the magic, adventure, and mystery of childhood. 

          I found a love of art as a young kid, and have always been especially drawn to picture books. With a kindergarten teacher for a mother and and artist for a father, I grew up in an atmosphere of learning and creativity. One of our favorite family trips was going to an enormous bookstore in Portland, Oregon (the big city for us!) called Powell's Books. I would find a cozy corner to plant myself, and spend the next few hours reading books, completely mesmerized by the beautiful illustrations. Even now, a mother myself, I can't get enough of reading picture books to my daughter; still finding myself drawn into stories by the beautiful artwork.

          I have taken classes at Portland Community College and Southwestern Oregon Community College, but am mostly a self-taught artist. 

          If you are interested in my work I would love to hear from you! You can email me at monica@moesart.net, I would be so happy to hear about your project!
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
