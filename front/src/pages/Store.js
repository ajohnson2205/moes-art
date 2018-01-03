import React, { Component } from 'react';


import Navbar from '../components/Navbar.js'


class Store extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container test">
          <h3>Store</h3>
        </div>

      </div>
    )
  }
}

export default Store;
