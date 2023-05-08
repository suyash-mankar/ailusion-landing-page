import React from "react";
import "./page1.scss";
import { page1_img } from "../../global/icons/media";

function Page1() {
  return (
    <div className="page1_container">
      <div className="page1_left_container">
        <div className="page1_heading">
          Step into a World of Wonders <br />
          <span style={{ color: "#FD5555" }}>with VR Headset</span>
        </div>
        <div className="page1_subtext">
          Experience a new level of immersive entertainment with VR, AR, and MR.
          Our low-cost VR headset is designed to be comfortable, versatile,
          accessible and connectible to all.
        </div>
      </div>
      <div className="page1_right_container">
        <div className="page1_img_container">
          <img src={page1_img} alt="page1_img" className="page1_img" />
        </div>
      </div>
    </div>
  );
}

export default Page1;
