import React from "react";
import "./AboutUs.css";
import img from "./AboutUs_images/aboutus.png";
import NavBar from "../NavBar/NavBar";

function AboutUs() {
  return (
    <div className="about_cont">

        <div className="lef">
                      <div className="nas">
                        <h1 className="leftitle">Creativity</h1>
                      </div>
                      <div className="lefdown">
                     <p className="lefpar">
                        Creativity is at the heart of everything we do. It drives us to think differently, challenge the ordinary, and bring fresh, innovative ideas to life. Whether we're designing, building, or problem-solving, we believe creativity is the key to making meaningful connections and creating lasting impact.
                     </p>
                     </div>
        </div>


        <div className="mid">
          <div className="midup">
              <h1 className="miduph1">Passion</h1>
          </div>
          <div className="middown">
            <p className="middownp">Passion fuels our work and inspires everything we create. It’s the driving force behind our dedication, pushing us to go the extra mile and never settle for average. With genuine enthusiasm for what we do, we approach every challenge with energy, purpose, and a love for the craft.</p>
          </div>
        </div>


        <div className="rig">
            <div className="rignas">
              <h1 className="righ1">Integrity</h1>
            </div>
            <div className="rigdown">
            <p className="rigp">
              Integrity is at the core of who we are. We believe in being honest, consistent, and accountable in everything we do. By building trust through our actions and staying true to our values, we create meaningful relationships and deliver work we’re proud of.
            </p>
            </div>
        </div>

    </div>
  );
}

export default AboutUs;
