import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MainVideo from "./Components/Mainvideo/MainVideo";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    search: "",
  });

  const getData = async () => {
    var data = axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: "AIzaSyCW13n8OkLTjtG3iZXybr-VOddUZXKjdYE",
        q: input.search ? input.search : "Anuv Jain",
      },
    });
    var response = await data;
    if (response.data) {
      setData(response.data);
    }
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <div className="container">
        <SearchBar inputs={{ input, setInput, getData }} />
        <MainVideo data={data} />
      </div>
    </>
  );
}

export default App;
