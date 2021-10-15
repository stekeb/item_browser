import "./pagenumber.css";

import React from "react";

function Pagenumber({ number, paginateHandler }) {
  return (
    <div className="pagenumber" onClick={() => paginateHandler(number)}>
      <h2>{number}</h2>
    </div>
  );
}

export default Pagenumber;
