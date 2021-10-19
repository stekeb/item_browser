import React, { useState, useEffect } from "react";
import "./searchbar.css";

function Searchbar({ items, filteredDataHandler }) {
  const [sales, setSales] = useState(false);
  const [gender, setGender] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    filteredDataHandler(filteredItems());
  }, [sales, gender, searchTerm]);

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

  return (
    <div className="searchbar">
      <div className="filter-container">
        <div className="sales-container">
          <input
            onChange={() => setSales(!sales)}
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
            data-testid="gender-dropdown"
            onChange={(e) => setGender(e.target.value)}
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
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        autoComplete="off"
        placeholder="Enter Search Term"
      />
    </div>
  );
}

export default Searchbar;
