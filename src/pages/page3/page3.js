import React from "react";
import "./page3.scss";
import { page3_img } from "../../global/icons/media";

function page3() {
  return (
    <div className="page3_container">
      <div className="page3_left_container">
        <div className="page3_img_container">
          <img src={page3_img} alt="page3_img" className="page3_img" />
        </div>
      </div>
      <div className="page3_right_container">
        <div className="page3_heading">
          The power of <br />
          <span style={{ color: "#FD5555" }}>IMAGINATION</span>
        </div>
        <div className="page3_subtext">
          Virtual reality's immersive experiences can transport you to boundless
          worlds while augmented reality's seamless integration with reality
          unlocks endless interactive and innovative possibilities, unleashing
          your imagination's full potential.
        </div>
      </div>
    </div>
  );
}

export default page3;
