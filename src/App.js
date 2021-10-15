import "./App.css";
import input from "./data/products.csv";
import { csv } from "csvtojson";
// import fetchPosts from "./services/datafetcher";
import React, { useState, useEffect } from "react";
import Itemlist from "./components/itemlist/Itemlist";
import Pagination from "./components/pagination/Pagination";
import Searchbar from "./components/searchbar/Searchbar";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [sales, setSales] = useState(false);
  const [gender, setGender] = useState("all");

  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      await fetch(input)
        .then((response) => response.text())
        .then((text) => csv().fromString(text))
        .then((result) => setItems(result));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filteredItems = () => {
    let manipulateItems = items;
    if (gender !== "all")
      manipulateItems = manipulateItems.filter(
        (item) => item.gender === gender
      );
    if (sales)
      manipulateItems = manipulateItems.filter(
        (item) => item.sale_price < item.price
      );
    return manipulateItems;
  };

  const pagination = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredItems().slice(indexOfFirstItem, indexOfLastItem);
  };

  const paginateHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const salesHandler = () => {
    setSales(!sales);
    setCurrentPage(1);
  };

  const genderHandler = (genderinput) => {
    setGender(genderinput);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Searchbar
        items={filteredItems()}
        salesHandler={salesHandler}
        genderHandler={genderHandler}
      />
      <div className="item-page-container">
        <Itemlist items={pagination()} loading={loading} />
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredItems().length}
          paginateHandler={paginateHandler}
        />
      </div>
    </div>
  );
}

export default App;
