import "./details.css";
import React, { useEffect, useState } from "react";
import Detailspicture from "../detailspicture/Detailspicture";

function Details({ detailViewData, detailHandler }) {
  const [pictures, setPictures] = useState([]);
  const [backgroundPic, setBackgroundPic] = useState("");

  useEffect(() => {
    const createPicArray = () => {
      let picArray = [];
      picArray.push(detailViewData.image_link);
      if (detailViewData.additional_image_link.split(", "))
        picArray = picArray.concat(
          detailViewData.additional_image_link.split(", ")
        );
      setPictures(picArray);
      setBackgroundPic(picArray[0]);
    };
    createPicArray();
  }, []);

  const backPicSwitch = (picInput) => setBackgroundPic(picInput);

  const picDisplay = pictures.map((item, index) => (
    <Detailspicture key={index} item={item} backPicSwitch={backPicSwitch} />
  ));
  return (
    <div className="details">
      <div
        className="details-picture"
        style={{ backgroundImage: `url(${backgroundPic})` }}
      >
        <a href="javascript:;">
          <div className="details-closebutton" onClick={() => detailHandler()}>
            x
          </div>
        </a>
      </div>
      <div className="details-details">
        <h2>{detailViewData.title}</h2>
        <h1># {detailViewData.gtin}</h1>
        <h2>Gender: {detailViewData.gender}</h2>
        <h2>Price: {detailViewData.price}</h2>
        <h2>Sales Price: {detailViewData.sale_price}</h2>
      </div>
      <div className="details-additional-pictures">{picDisplay}</div>
    </div>
  );
}

export default Details;
