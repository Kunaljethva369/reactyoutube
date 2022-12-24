import React from "react";
import { FaSearch } from "react-icons/fa";
import { useVideoHook } from "../../Context/VideoContext";
import "./SearchBar.css";

function SearchBar() {
  const searchBar = useVideoHook();
  const handleInput = (e) => {
    const userSearch = e.target.value;
    searchBar.setInput({
      search: userSearch
    });
  }

  const handleChange = () => {
    console.log(searchBar.input.search);
    // searchBar.getData();
  }

  return (
    <>
      <header>
        <div className="search-area">
          <input type="text" placeholder="Search" value={searchBar.input.search} onChange={handleInput} />
          <button type="submit" onClick={handleChange}>
            <FaSearch />
          </button>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
