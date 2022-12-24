import React from "react";
import "./App.css";
import MainVideo from "./Components/Mainvideo/MainVideo";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="container">
        <SearchBar />
        <MainVideo />
      </div>
    </>
  );
}

export default App;
