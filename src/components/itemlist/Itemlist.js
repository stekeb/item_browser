import "./itemlist.css";
import React from "react";
import Item from "../item/Item";

function Itemlist({ items, loading }) {
  const itemGenerator = items.map((item) => (
    <Item key={item.gtin} item={item} />
  ));

  return (
    <div className="itemlist">
      {loading ? <h2>Loading...</h2> : itemGenerator}
    </div>
  );
}

export default Itemlist;
