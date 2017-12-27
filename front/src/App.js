import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Gallery from './pages/Gallery.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/gallery" component={Gallery}/>
        </div>
      </Router>
    );
  }
}

export default App;
