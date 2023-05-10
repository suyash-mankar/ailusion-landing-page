import React from "react";
import "./page4.scss";
import { page4_img } from "../../global/icons/media";

function Page4() {
  return (
    <div className="page4_container">
      <div className="page4_left_container">
        <div className="page4_heading">
          Power of Technology elevates <br />
          <span
            style={{
              color: "#60E7FF",
              fontFamily: "Montagu Slab",
              fontWeight: 600,
              letterSpacing: "0.4em",
            }}
          >
            ENTERTAINMENT
          </span>
        </div>
        <div className="page4_subtext">
          With expertise in immersive technology, out VR headset is designed to
          be lightweight and ergonomic for extended use. With wireless
          smartphone connectivity, you can enjoy an unrestricted 360-degree
          view, while seamless compatibility with social media platforms allows
          for easy content creation and sharing.
        </div>
      </div>
      <div className="page4_right_container">
        <div className="page4_img_container">
          <img src={page4_img} alt="page4_img" className="page4_img" />
        </div>
      </div>
    </div>
  );
}

export default Page4;
