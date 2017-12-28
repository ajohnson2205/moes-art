import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './bootstrap.min.css';
import './Navbar.css'


import bears from '../images/polarBears.jpeg'
import tree from '../images/christmasCardTree.jpeg'
import house from '../images/houseAndTruck.jpg'





class Marketing extends Component {
  render() {
    return (








      <div className="container marketing">

            <div className="row">
              <div className="col-lg-4">
                <img className="rounded-circle" src={bears} alt="Generic placeholder image" width="140" height="140" />
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><Link className="btn btn-secondary" to="/about" role="button">View details &raquo;</Link></p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={bears} alt="Generic placeholder image" width="140" height="140" />
                <h2>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><Link className="btn btn-secondary" to="/about" role="button">View details &raquo;</Link></p>
              </div>
              <div className="col-lg-4">
                <img className="rounded-circle" src={bears} alt="Generic placeholder image" width="140" height="140" />
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><Link className="btn btn-secondary" to="/about" role="button">View details &raquo;</Link></p>
              </div>
            </div>
            </div>








    )
  }
}

export default Marketing;
