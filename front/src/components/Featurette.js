import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './bootstrap.min.css';
import './Navbar.css'


import christmasCardTree500px from '../images/christmasCardTree500px.jpeg'
import houseAndTruck500px from '../images/houseAndTruck500px.jpeg'
import threeDogsInAtNight500px from '../images/threeDogsInAtNight500px.jpeg'






class Featurette extends Component {
  render() {
    return (




<div className="container">

      {/* <hr className="featurette-divider" /> */}

             <div className="row featurette">
               <div className="col-md-7">
                 <h2 className="featurette-heading">Visit our gallery. <span className="text-muted">See portfolio samples.</span></h2>
               </div>
               <div className="col-md-5">
                 <img className="featurette-image img-fluid mx-auto" src={christmasCardTree500px} alt=" " />
               </div>
               <span><p><Link className="btn btn-lg btn-primary" to="/gallery" role="button">Take me there!</Link></p></span>
             </div>

             <hr className="featurette-divider" />

             <div className="row featurette">
               <div className="col-md-7 order-md-2">
                 <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                 <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
               </div>
               <div className="col-md-5 order-md-1">
                 <img className="featurette-image img-fluid mx-auto" src={houseAndTruck500px} alt=" " />
               </div>
             </div>

             <hr className="featurette-divider" />

             <div className="row featurette">
               <div className="col-md-7">
                 <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                 <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
               </div>
               <div className="col-md-5">
                 <img className="featurette-image img-fluid mx-auto" src={threeDogsInAtNight500px} alt=" " />
               </div>
             </div>

             <hr className="featurette-divider" />
           </div>








    )
  }
}

export default Featurette;
