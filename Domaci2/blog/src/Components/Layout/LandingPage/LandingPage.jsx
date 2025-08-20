import React from "react";
import "./LandingPage.css";
import slik1 from "./slike/slika5.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function LandingPage() {
    return(
      <div className="landing-container">
              <div className="left_part">
                  <img src={slik1} alt="" className="left_img"/>
              </div>

              <div className="right_part">
                    <h1 className="rigt_title">TravelBlog</h1>
                    <p className="rigt_paragraph">Welcome to your gateway to adventure! <br /> Our travel blog is packed with real stories and stunning destinations <br /> Join us today!</p>
                    <button className="right_btn">Explore</button>
              </div>
      </div>
    );
 
}

export default LandingPage;
