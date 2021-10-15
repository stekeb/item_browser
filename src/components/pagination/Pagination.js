import "./pagination.css";
import React from "react";
import Pagenumber from "../pagenumber/Pagenumber";

function pagination({ itemsPerPage, totalItems, paginateHandler }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const numberGenerator = pageNumbers.map((number) => (
    <Pagenumber
      key={number}
      number={number}
      paginateHandler={paginateHandler}
    />
  ));
  return <div className="pagination">{numberGenerator}</div>;
}

export default pagination;
