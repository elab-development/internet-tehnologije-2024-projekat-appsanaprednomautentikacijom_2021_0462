import React from 'react'
import './Card.css';

function Card(){
  return(
    <>
    <div className="card">
      <img src="https://via.placeholder.com/300" alt="Card image"/>
      <h2 className="card-title">Card Title</h2>
      <p className="card-text">This is an example of a card component. Add your descriptive text here.</p>
      <button className="card-button">Click Me</button>
      <span className="card-person">John Doe</span>
  </div>
    </>
  );
};

export default Card