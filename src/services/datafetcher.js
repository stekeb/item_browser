import React from "react";
import input from "../data/products.csv";
import { csv } from "csvtojson";

const genderFilteredArray = (input) => {
  let returnArr = [];
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].gender !== "male" &&
      input[i].gender !== "female" &&
      input[i].gender !== "unisex"
    ) {
      input[i].gender = "NA";
    }
    returnArr.push(input[i]);
  }
  return returnArr;
};

const fetchPosts = async () => {
  const data = await fetch(input)
    .then((response) => response.text())
    .then((text) => csv().fromString(text))
    .then((input) => genderFilteredArray(input));
  return data;
};

export default fetchPosts;
