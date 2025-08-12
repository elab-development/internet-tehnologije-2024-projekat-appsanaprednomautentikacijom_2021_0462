import React from "react";
import './LandingPage.css';
import slik1 from './slike/gentleman2.png'

function LandingPage(){
    return(
        <div className="landing-wrapper">

            <div className="left-landing">
                <div className="left-content">
                    <h1 className="landing-title">Share the Journey</h1>
                    <p className="landing-txt">Step into a world where every path tells a story and every sunset paints a new beginning <br />Together, let’s wander beyond the known and find magic in every moment</p>
                    <button className="landing-btn">EXPLORE</button>
                </div>
            </div>

            <div className="right-landing">
                <img src={slik1} alt="" className="desno"/>
            </div>



        </div>
    )
}






export default LandingPage