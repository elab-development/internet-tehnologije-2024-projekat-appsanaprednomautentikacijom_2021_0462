import React from "react";
import "./MyCard.css";
import { useNavigate } from "react-router-dom";

function MyCard({ el, onDelete }) {
  const navigate = useNavigate();

  const navigateToCity = () => {
    navigate(`/post/${el.id}`, { state: { city: el } });
  };

  const deletePost = () => {
    onDelete?.(el.id); // nema fetch-a ovde, parent odrađuje DELETE + refetch
  };

  return (
    <div className="blogCard">
      <h1 className="destinationName">{el.destination}</h1>
      <p className="smallDescription">{el.description}</p>
      <button className="cardButton" onClick={navigateToCity}>
        Explore
      </button>
      <button className="cardButton" onClick={deletePost}>
        delete
      </button>
      <h3 className="userName">{el.userName}</h3>
    </div>
  );
}

export default MyCard;
