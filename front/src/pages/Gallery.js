import React, { Component } from 'react';
import './bootstrap.min.css'


import '../components/Navbar.css'

import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'



import bakery from '../images/rawImages/bakery.jpeg'
import bakery500px from '../images/rawImages/bakery500px.jpeg'

import caseyBear from '../images/rawImages/caseyBear.jpeg'
import caseyBear500px from '../images/rawImages/caseyBear500px.jpeg'

import cat from '../images/rawImages/cat.jpeg'
import cat500px from '../images/rawImages/cat500px.jpeg'

import christmasCard from '../images/rawImages/christmasCard.jpeg'
import christmasCard500px from '../images/rawImages/christmasCard500px.jpeg'

import dinos from '../images/rawImages/dinos.jpeg'
import dinos500px from '../images/rawImages/dinos500px.jpeg'

import houseAndTruck from '../images/rawImages/houseAndTruck.jpeg'
import houseAndTruck500px from '../images/rawImages/houseAndTruck500px.jpeg'

import lemur from '../images/rawImages/lemur.jpeg'
import lemur500px from '../images/rawImages/lemur500px.jpeg'

import mirror from '../images/rawImages/mirror.jpeg'
import mirror500px from '../images/rawImages/mirror500px.jpeg'

import otherCat from '../images/rawImages/otherCat.jpeg'
import otherCat500px from '../images/rawImages/otherCat500px.jpeg'

import polarbears from '../images/rawImages/polarbears.jpeg'
import polarbears500px from '../images/rawImages/polarbears500px.jpeg'

import threeDogs from '../images/rawImages/threeDogs.jpeg'
import threeDogs500px from '../images/rawImages/threeDogs500px.jpeg'

import treehouseNight from '../images/rawImages/treehouseNight.jpeg'
import treehouseNight500px from '../images/rawImages/treehouseNight500px.jpeg'


class Gallery extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">

      {/* <hr className="featurette-divider" /> */}

             <div className="row featurette">
               <div className="col-md-7">
                 <h2 className="featurette-heading">Gallery</h2>
                 <p className="text-muted"> Tap or click to see the the complete pieces.</p>
               </div>
            </div>  
        </div>
      <div className="container">
        <div className="row row-grid">
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={bakery500px} className="img-fluid" data-toggle="modal" data-target="#bakeryModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={caseyBear500px} className="img-fluid" data-toggle="modal" data-target="#caseyBearModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={cat500px} className="img-fluid" data-toggle="modal" data-target="#catModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={christmasCard500px} className="img-fluid" data-toggle="modal" data-target="#christmasCardModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={dinos500px} className="img-fluid" data-toggle="modal" data-target="#dinosModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={houseAndTruck500px} className="img-fluid" data-toggle="modal" data-target="#houseAndTruckModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={lemur500px} className="img-fluid" data-toggle="modal" data-target="#lemurModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={mirror500px} className="img-fluid" data-toggle="modal" data-target="#mirrorModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={otherCat500px} className="img-fluid" data-toggle="modal" data-target="#otherCatModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={polarbears500px} className="img-fluid" data-toggle="modal" data-target="#polarbearsModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={threeDogs500px} className="img-fluid" data-toggle="modal" data-target="#threeDogsModal" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={treehouseNight500px} className="img-fluid" data-toggle="modal" data-target="#treehouseNightModal" />
          </div>
        </div>










{/* Modal for bakery */}
<div className="modal fade" id="bakeryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">A baker in a bakery</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={bakery} className="img-fluid" />
      </div>
    </div>
  </div>
</div>



{/* Modal for caseyBear */}

<div className="modal fade" id="caseyBearModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">A picture of Casey the Bear</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={caseyBear} className="img-fluid" />
      </div>
    </div>
  </div>
</div>



{/* Modal for "cat" */}

<div className="modal fade" id="catModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">A picture of a cat</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={cat} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "christmasCard" */}

<div className="modal fade" id="christmasCardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"christmasCard"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={christmasCard} className="img-fluid" />
      </div>
    </div>
  </div>
</div>



{/* Modal for "dinos" */}

<div className="modal fade" id="dinosModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"dinos"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={dinos} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "houseAndTruck" */}

<div className="modal fade" id="houseAndTruckModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"houseAndTruck"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={houseAndTruck} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "lemur" */}

<div className="modal fade" id="lemurModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"lemur"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={lemur} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "mirror" */}

<div className="modal fade" id="mirrorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"mirror"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={mirror} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "otherCat" */}

<div className="modal fade" id="otherCatModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"otherCat"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={otherCat} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "polarbears" */}

<div className="modal fade" id="polarbearsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"polarbears"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={polarbears} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "threeDogs" */}

<div className="modal fade" id="threeDogsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"threeDogs"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={threeDogs} className="img-fluid" />
      </div>
    </div>
  </div>
</div>


{/* Modal for "treehouseNight" */}

<div className="modal fade" id="treehouseNightModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h5 className="modal-title" id="exampleModalLabel">"treehouseNight"</h5> */}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <img src={treehouseNight} className="img-fluid" />
      </div>
    </div>
  </div>
</div>




      </div>
      <hr className="featurette-divider" />
      <Footer />
    </div>
    )
  }
}

export default Gallery;
