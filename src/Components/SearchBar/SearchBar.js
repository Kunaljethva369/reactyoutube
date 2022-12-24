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
    searchBar.getData();
    searchBar.setSideClick(false);
  }

  const ifEnterPressed = (event) => {
    if (event.callback.keyCode == 13) {
      if (searchBar.input.search != '') {
        searchBar.getData();
        searchBar.setSideClick(false);
      }
      else {
        alert("Plese Entet Your Topic");
      }
    }
  }

  return (
    <>
      <header>
        <div className="search-area">
          <input type="text" placeholder="Search" onKeyUp={(event) => ifEnterPressed({ callback: event })} value={searchBar.input.search} onChange={handleInput} />
          <button type="submit" onClick={handleChange}>
            <FaSearch />
          </button>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
