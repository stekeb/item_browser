import "./item.css";
import React from "react";

function Item({ item, detailHandler }) {
  return (
    <div className="item" data-testid="item">
      <a href="javascript:;">
        <div
          className="item-picture"
          onClick={() => detailHandler(item)}
          style={{ backgroundImage: `url(${item.image_link})` }}
        ></div>
        <div className="item-details">
          <h2>{item.title}</h2>
          <h1># {item.gtin}</h1>
          <h2>Gender: {item.gender}</h2>
          <h2>Price: {item.price}</h2>
          <h2>Sales Price: {item.sale_price}</h2>
        </div>
      </a>
    </div>
  );
}

export default Item;
