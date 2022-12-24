import React, { useEffect } from "react";
import "./App.css";
import MainVideo from "./Components/Mainvideo/MainVideo";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useVideoHook } from "./Context/VideoContext";
import axios from "axios";


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
