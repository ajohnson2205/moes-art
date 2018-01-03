import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './bootstrap.min.css';
import './Navbar.css'


import bears from '../images/polarBears.jpeg'
import tree from '../images/christmasCardTree.jpeg'
import house from '../images/houseAndTruck.jpg'


import cat500px from '../images/rawImages/cat500px.jpeg'
import caseyBear500px from '../images/rawImages/caseyBear500px.jpeg'
import otherCat500px from '../images/rawImages/otherCat500px.jpeg'






class Marketing extends Component {
  render() {
    return (








      <div className="container marketing">

            <div className="row">
              <div className="col-lg-4">
                <img className="rounded-circle" src={cat500px} alt="Generic placeholder image" width="140" height="140" />
                <h2>Store</h2>
                <p>You can buy things here. It will cost money, generally in US dollars. But that's probably already an expectation, eh?</p>
                <p><Link className="btn btn-secondary" to="/store" role="button">Shop &raquo;</Link></p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={caseyBear500px} alt="Generic placeholder image" width="140" height="140" />
                <h2>Gallery</h2>
                <p>Pictures of stuff and shit. And so on and so forth. Blah blah blah, this is where there are pictures.</p>
                <p><Link className="btn btn-secondary" to="/gallery" role="button">Browse &raquo;</Link></p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={otherCat500px} alt="Generic placeholder image" width="140" height="140" />
                <h2>About</h2>
                <p>Monica is a turd, but not just that! She's so much more! Learn about her tortuous existence and the people that have to tolerate her.</p>
                <p><Link className="btn btn-secondary" to="/about" role="button">Learn &raquo;</Link></p>
              </div>
            </div>
            </div>








    )
  }
}

export default Marketing;
