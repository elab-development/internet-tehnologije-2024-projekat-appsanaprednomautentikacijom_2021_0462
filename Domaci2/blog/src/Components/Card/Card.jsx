import React from "react";
import "./Card.css";

function Card({el}){
  return(
    <>
        <div className="blogCard">

            <img src={el.url} alt="blog image" />
            <h1 className="destinationName"> {el.destination}</h1>
            <p className="smallDescription"> {el.description}</p>
            <button className="cardButton">Explore {el.destination}</button>
            <h3 className="userName"> {el.userName}</h3>

        </div>
    </>  
  );
};

export default Card