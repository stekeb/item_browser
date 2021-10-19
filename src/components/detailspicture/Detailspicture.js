import React from "react";
import "./detailspicture.css";

function Detailspicture({ item, backPicSwitch }) {
  return (
    <div>
      <a href="javascript:;">
        <div
          className="detailspicture"
          style={{ backgroundImage: `url(${item})` }}
          onClick={() => backPicSwitch(item)}
        ></div>
      </a>
    </div>
  );
}

export default Detailspicture;
