import "./pagenumber.css";

import React from "react";

function Pagenumber({ number, paginateHandler }) {
  return (
    <div className="pagenumber" onClick={() => paginateHandler(number)}>
      <a href="javascript:;">
        <h2>{number}</h2>
      </a>
    </div>
  );
}

export default Pagenumber;
