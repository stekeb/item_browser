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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      await fetch(input)
        .then((response) => response.text())
        .then((text) => csv().fromString(text))
        .then((input) => genderFilteredArray(input))
        .then((result) => setItems(result));
      setLoading(false);
    };
    fetchPosts();
  }, []);

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

  const filteredItems = () => {
    let manipulateItems = items;
    if (gender !== "NA" && gender !== "all")
      manipulateItems = manipulateItems.filter(
        (item) => item.gender === gender
      );
    if (sales)
      manipulateItems = manipulateItems.filter(
        (item) => item.sale_price < item.price
      );
    if (searchTerm) {
      const regexObj = new RegExp(searchTerm);
      manipulateItems = manipulateItems.filter((item) =>
        item.title.toLowerCase().match(regexObj)
      );
    }
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

  const searchHandler = (searchinput) => {
    setSearchTerm(searchinput);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Searchbar
        items={filteredItems()}
        salesHandler={salesHandler}
        genderHandler={genderHandler}
        searchHandler={searchHandler}
        searchTerm={searchTerm}
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
