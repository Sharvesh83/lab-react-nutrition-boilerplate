import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search for a meal..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
