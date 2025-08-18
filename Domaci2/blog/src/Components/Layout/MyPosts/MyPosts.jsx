import MyCard from "./MyCard";
import NavBar from "../../Layout/NavBar/NavBar";
import React, { useState, useEffect, useCallback } from "react";
import "./MyPosts.css";
import Footer from "../../Layout/Footer/Footer";
import { useAuth } from "../../../Context/Auth";
import { useNavigate } from "react-router-dom";

function MyPosts() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isLoggedIn } = useAuth();
  const [posts, setPosts] = useState([]);

  const toggleTheme = () => setIsDarkMode((d) => !d);

  // Izdvojen fetch da možemo da ga pozovemo i posle brisanja
  const fetchPosts = useCallback(async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/post/getMy", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // ako vrati 200 -> učitaj rezultat
    if (response.ok) {
      const data = await response.json();
      setPosts(data.result || []);
    } else {
      console.error("Failed to fetch posts");
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/home");
      return;
    }
    fetchPosts();
  }, [isLoggedIn, navigate, fetchPosts]);

  // Ovdje je DELETE + refetch
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:3000/post/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        // pokušaj da pročitaš poruku sa servera, ali nemoj da puca ako nema JSON-a
        const data = await res.json().catch(() => ({}));
        console.error("Delete failed:", data?.error || res.statusText);
        return;
      }

      // uspešno obrisano -> povuci sveže podatke
      await fetchPosts();
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

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
              {posts.map((el) => (
                <div className="kartica" key={el.id}>
                  <MyCard el={el} onDelete={handleDelete} />
                </div>
              ))}
            </div>
          </div>
          <button className="switch-button" onClick={toggleTheme}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyPosts;
