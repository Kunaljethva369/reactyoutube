import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar(props) {
  const handleInput = (e) =>{
    var userSearch = e.target.value;
    props.inputs.setInput({
      ...props,
      search:userSearch
    });
  }

  const handleChange = ()=>{
    props.inputs.getData();
  }

  return (
    <>
      <header>
        <div className="search-area">
          <input type="text" placeholder="Search" value={props.inputs.input.search} onChange={handleInput} />
          <button type="submit" onClick={handleChange}>
            <FaSearch />
          </button>
        </div>
      </header>
    </>
  );
}

export default SearchBar;
