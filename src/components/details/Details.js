import "./details.css";
import React from "react";

function Details({ detailViewData, detailHandler }) {
  return (
    <div className="details">
      <div
        className="details-picture"
        style={{ backgroundImage: `url(${detailViewData.image_link})` }}
      >
        <div onClick={() => detailHandler()}>close</div>
      </div>
      <div className="details-details">
        <h2>{detailViewData.title}</h2>
        <h1># {detailViewData.gtin}</h1>
        <h2>Gender: {detailViewData.gender}</h2>
        <h2>Price: {detailViewData.price}</h2>
        <h2>Sales Price: {detailViewData.sale_price}</h2>
      </div>
    </div>
  );
}

export default Details;
