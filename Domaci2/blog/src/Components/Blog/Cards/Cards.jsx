import Card from "../Card/Card";
import NavBar from "../../Layout/NavBar/NavBar";
import React, { useState } from "react";
import "./Cards.css";
import Footer from "../../Layout/Footer/Footer";
import { useEffect } from "react";

function Cards({ users }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/post/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Ovo su ucitani postovi", data);
      if (!response.ok) {
        console.error("Failed to fetch posts");
        return;
      }
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <NavBar />
      <div className={`whole-page ${isDarkMode ? "dark" : "light"}`}>
        <div className="blogWrapper">
          <h1 className="naslov">Explore destinations!</h1>
          <p className="cardsTekst">
            "Explore endless Perspectives: Your Gateway to Travel topics"
          </p>
          <div className="cardsContainer">
            <div className="card-cards">
              {posts.map((el) => {
                return (
                  <div className="kartica">
                    {" "}
                    <Card key={el.id} el={el} />{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <button className="switch-button" onClick={toggleTheme}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cards;
