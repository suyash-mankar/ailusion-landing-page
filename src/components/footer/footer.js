import React from "react";
import "./footer.scss";
import { ailusion_logo_dark } from "../../global/icons/media";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_left_container">
        <div className="logo_name_container">
          <img src={ailusion_logo_dark} alt="" className="logo_dark_img" />
          <div className="company_name"> AILUSION</div>
        </div>
        <div className="about_company">
          Our company can leverage the power of VR headset to enhance employee
          training, offer virtual property tours, and create engaging marketing
          campaigns, providing customers and clients with a more immersive
          experience.
        </div>
      </div>
      <div className="footer_right_container">
        <div className="contact">Contact</div>
        <div className="call_us">Call Us</div>
        <div className="mail_us">Mail Us</div>
      </div>
    </div>
  );
}

export default Footer;
