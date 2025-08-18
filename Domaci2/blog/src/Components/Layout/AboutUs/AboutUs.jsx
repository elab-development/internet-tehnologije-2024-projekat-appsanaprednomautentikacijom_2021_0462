import React from "react";
import "./AboutUs.css";
import img from "./AboutUs_images/aboutus.png";
import NavBar from "../NavBar/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-left"></div>
          <div className="about-right">
            <div className="about-right-content">
              <h1 className="about-h1">Get to Know Us</h1>
              <p className="about-p">
                Welcome to TravelBlog, your go-to destination for travel
                inspiration, tips, and unforgettable adventures! We’re a team of
                passionate travelers who believe that every journey—whether it’s
                a weekend getaway or a months-long expedition—has a story to
                tell. Our mission is to share firsthand experiences, hidden
                gems, and practical advice to help you explore the world with
                confidence and excitement.
                <br />
                <br />
                From bustling cities to remote landscapes, we cover it
                all—offering destination guides, budget-friendly travel hacks,
                cultural insights, and breathtaking photography to fuel your
                wanderlust. Whether you’re a solo traveler, a couple seeking
                romantic escapes, or a family looking for fun-filled vacations,
                we have something for you. Join us as we explore the world one
                adventure at a time. Let’s turn travel dreams into
                reality—together! Follow our journey & start yours today!
                <br />
                <br />
              </p>
              <img src={img} alt="" className="aboutus" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
