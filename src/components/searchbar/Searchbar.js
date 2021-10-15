import "./searchbar.css";

import React from "react";

function Searchbar({
  items,
  salesHandler,
  genderHandler,
  searchHandler,
  searchTerm,
}) {
  return (
    <div className="searchbar">
      <div className="filter-container">
        <div className="sales-container">
          <input
            onChange={() => salesHandler()}
            type="checkbox"
            id="sales"
            name="sales"
          />
          <label htmlFor="sales">On sale</label>
        </div>
        <div className="gender-dropdown-container">
          <label htmlFor="gender-dropdown">Choose a Gender:</label>

          <select
            name="gender-dropdown"
            id="gender-dropdown"
            onChange={(e) => genderHandler(e.target.value)}
          >
            <option value="all">all</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="unisex">unisex</option>
          </select>
        </div>
      </div>
      <label htmlFor="searchfield"></label>
      <input
        type="text"
        id="searchfield"
        name="searchfield"
        onChange={(e) => searchHandler(e.target.value)}
        value={searchTerm}
        autoComplete="off"
        placeholder="Enter Search Term"
      />
    </div>
  );
}

export default Searchbar;
