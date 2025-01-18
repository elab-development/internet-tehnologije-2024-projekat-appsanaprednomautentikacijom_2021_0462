import React from 'react'
import './Card.css';

const Card = ({ image, title, description, buttonText, personName }) => {
  return(
    <div class="page-container">
  <div class="centered-div">
    <div class="title">
        <h1>TravelBlog</h1>
        <p className='title-card'>Explore destinations and experiences from all over the world!</p>
    </div>
    <div class="card-container">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">3</div>
      <div class="card">3</div>
      <div class="card">3</div>
      <div class="card">3</div>
      <div class="card">3</div>
      
    </div>
  </div>
</div>
  );
}

export default Card