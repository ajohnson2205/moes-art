import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './bootstrap.min.css';
import './Navbar.css'





class ExhibitionTable extends Component {
  render() {
    return (








      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Year</th>
            <th scope="col">Location</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hillcrest School Auction</td>
            <td>2015</td>
            <td>North Bend, OR</td>
          </tr>
          <tr>
            <td>S.W.O.Y.A. Club Auction</td>
            <td>2014</td>
            <td>Coos Bay, OR</td>
          </tr>
          <tr>
            <td>L.A.B Band Ukulele Painting Fundraiser</td>
            <td>2014</td>
            <td>Coos Bay, OR</td>
          </tr>
          <tr>
            <td>CBDA Mural Project</td>
            <td>2013</td>
            <td>Coos Bay, OR</td>
          </tr>
          <tr>
            <td>Featured Artist, Gallery 180</td>
            <td>2010</td>
            <td>Coos Bay, OR</td>
          </tr>
          <tr>
            <td>'Expressions West', Coos Art Museum</td>
            <td>2007</td>
            <td>Coos Bay, OR</td>
          </tr>
          <tr>
            <td>'Visions', Coos Art Museum</td>
            <td>2004</td>
            <td>Coos Bay, OR</td>
          </tr>






        </tbody>
      </table>








    )
  }
}

export default ExhibitionTable;
