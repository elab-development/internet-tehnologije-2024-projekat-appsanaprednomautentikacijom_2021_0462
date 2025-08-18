import React from "react";
import "./CreatePost.css";
import contact_slikaa from "./Contact_images/picture_contact.jpg";
import { useAuth } from "../../../Context/Auth";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function CreatePost() {
  const destinationRef = useRef(null);
  const descriptionRef = useRef(null);
  const textRef = useRef(null);

  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleCreatePost = async () => {
    //TODO: Validiraj da li je korisnik upisao u ova polja
    const body = {
      destination: destinationRef.current.value,
      description: descriptionRef.current.value,
      text: textRef.current.value,
    };
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      alert("Failed to create the post");
      return;
    }

    alert(data.message);
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        {isLoggedIn.isLoggedIn ? (
          <div className="contact-items">
            <div className="box1-contact">
              <div className="contact-form">
                <h1 className="form-title">Create post</h1>
                <input
                  type="text"
                  placeholder="Destination"
                  className="form_element"
                  ref={destinationRef}
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="form_element"
                  ref={descriptionRef}
                />
                <textarea
                  placeholder="Post"
                  className="form_element-message"
                  ref={textRef}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                />
                <input
                  type="button"
                  value="Create post"
                  className="form_button"
                  onClick={handleCreatePost}
                />
              </div>
            </div>
            <div className="box2-contact">
              <img
                src={contact_slikaa}
                alt="ss"
                className="box2-contact_image"
              />
            </div>
          </div>
        ) : (
          <input
            type="button"
            value="Please Log in before creating post"
            className="form_button"
            onClick={handleNavigate}
          />
        )}
      </div>
    </>
  );
}

export default CreatePost;
