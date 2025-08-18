import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Card({ el }) {
  const navigate = useNavigate();

  const navigateToCity = () => {
    navigate(`/post/${el.id}`, {
      state: { city: el },
    });
  };

  return (
    <>
      <div className="blogCard">
        <h1 className="destinationName"> {el.destination}</h1>
        <p className="smallDescription"> {el.description}</p>
        <button className="cardButton" onClick={navigateToCity}>
          Explore {el.destination}
        </button>
        <h3 className="userName"> {el.userName}</h3>
      </div>
    </>
  );
}

export default Card;
