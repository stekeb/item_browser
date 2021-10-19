import "./App.css";
import fetchPosts from "./services/datafetcher";
import React, { useState, useEffect } from "react";
import Itemlist from "./components/itemlist/Itemlist";
import Pagination from "./components/pagination/Pagination";
import Searchbar from "./components/searchbar/Searchbar";
import Details from "./components/details/Details";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const [detailView, setDetailView] = useState(false);
  const [detailViewData, setDetailViewData] = useState([]);
  const [itemsToManipulate, setItemsToManipulate] = useState([]);

  const loadData = async () => {
    await fetchPosts().then((data) => {
      setItems(data);
      setItemsToManipulate(data);
    });

    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const pagination = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return itemsToManipulate.slice(indexOfFirstItem, indexOfLastItem);
  };

  const paginateHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const filteredDataHandler = (datainput) => {
    setItemsToManipulate(datainput);
    setCurrentPage(1);
  };

  const detailHandler = (detailinput) => {
    if (detailinput) setDetailViewData(detailinput);
    setDetailView(!detailView);
  };

  return (
    <div className="App">
      {detailView ? (
        <Details
          detailViewData={detailViewData}
          detailHandler={detailHandler}
        />
      ) : (
        <div className="main">
          <Searchbar items={items} filteredDataHandler={filteredDataHandler} />

          <Itemlist
            items={pagination()}
            loading={loading}
            detailHandler={detailHandler}
          />

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={itemsToManipulate.length}
            paginateHandler={paginateHandler}
          />
        </div>
      )}
    </div>
  );
}

export default App;
