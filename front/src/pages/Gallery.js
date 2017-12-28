import React, { Component } from 'react';
import './bootstrap.min.css'


import '../components/Navbar.css'

import Navbar from '../components/Navbar.js'

import christmasCardTree500px from '../images/christmasCardTree500px.jpeg'
import houseAndTruck500px from '../images/houseAndTruck500px.jpeg'
import threeDogsInAtNight500px from '../images/threeDogsInAtNight500px.jpeg'
import christmasCardTree from '../images/christmasCardTree.jpeg'


class Gallery extends Component {
  render() {
    return (
      <div>
      <Navbar />

      <div className="container">
        <div className="row row-grid">
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={christmasCardTree500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={houseAndTruck500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={threeDogsInAtNight500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={houseAndTruck500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={christmasCardTree500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={christmasCardTree500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={threeDogsInAtNight500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={christmasCardTree500px} className="img-fluid" />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 row-grid">
            <img src={threeDogsInAtNight500px} className="img-fluid" />
          </div>
        </div>






{/* Example Modal */}

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>


        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>





{/* Test Modal with Image */}

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Image Example
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Image</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container">
          <img src={christmasCardTree} className="img-fluid" />

        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



      </div>
    </div>
    )
  }
}

export default Gallery;
