import React from 'react'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div class="container pt-5" >
    <div class="card text-center">
  <div class="card-header">
    Our First App
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcome To The App </h5>
    <p class="card-text">You Will Now Enhance Your Content</p>
    <Link to="/textform" class="btn btn-primary">Explore Text Transformation</Link>
  </div>
  <div class="card-footer text-muted">
    Be Your Best Version
  </div>
</div>

    </div>
  )
}

export default Cards
