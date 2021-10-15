import React from "react";
import input from "../data/products.csv";
import { csv } from "csvtojson";

const fetchPosts = async () => {
  await fetch(input)
    .then((response) => response.text())
    .then((text) => csv().fromString(text))
    .then((result) => {
      return result;
    });
};

export default fetchPosts;

//  useEffect(() => {
//   setLoading(true);

//   const fetchPosts = async () => {
//     await fetch(input)
//  .then((response) => response.text())
//  .then((text) => csv().fromString(text))
//  .then((result) => setItems(result));
// setLoading(false);}
// fetchPosts()
//  }, []);
