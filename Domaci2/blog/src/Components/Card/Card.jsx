import React from "react";
import "./Card.css";

function Card(){
  return(
    <>
        <div className="blogCard">

            <img src="#" alt="blog image" />
            <h1 className="destinationName"> London </h1>
            <p className="smallDescription"> Check my review of London, city of fun!</p>
            <button className="cardButton">Explore now!</button>
            <h3 className="userName"> John McGal</h3>

        </div>
    </>  
  );
};

export default Card