import React from "react";
import "./page5.scss";
import { page4_img } from "../../global/icons/media";

function page5() {
  return (
    <div className="page5_container">
      <div className="page5_left_container">
        <div className="page5_img_container">
          <img src={page4_img} alt="page5_img" className="page5_img" />
        </div>
      </div>
      <div className="page5_right_container">
        <div className="page5_heading">
          Power of Customer <br />
          <span style={{ color: "#FD5555" }}>ENGAGEMENT</span>
        </div>
        <div className="page5_subtext">
          Our immersive technology solutions are the perfect tool for businesses
          looking to create unique and interactive experiences that engage
          customers and elevate their marketing efforts. Whether you're a gamer,
          movie buff, educator, marketer, or business owner, our solutions cater
          to your needs and allow you to explore new worlds, boost brand
          recognition, and take your business to new heights
        </div>
      </div>
    </div>
  );
}

export default page5;
