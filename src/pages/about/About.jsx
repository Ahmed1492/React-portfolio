import React from "react";
import "./about.css";
import { Footer } from "../../component/footer/Footer";
import img1 from "../../../src/assets/react1.jpg";

export const About = () => {
  return (
    <div className="containerAbout">
      <div className="backgroundImageAbout">
        <div className="txt">
          <h1>ABOUT.</h1>
          <p>Im a friendly Full-Stack Developer.</p>
        </div>
      </div>

      <div className="descriptionAboutBar">
        <div className="leftSide">
          <h1>Who Am i</h1>
          <p>im a react Front-End developer. i</p>
          <p>create a responsive secure websites for</p>
          <p>my clients</p>
        </div>
        <div className="rightSide">
          <img src={img1} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
