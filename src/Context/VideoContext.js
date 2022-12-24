import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VideoContext = createContext();

const AppProivder = ({ children }) => {
    const [input, setInput] = useState({ search: "" });
    const [sideMainVideo, setSideMainVideo] = useState([]);
    const [sideClick, setSideClick] = useState(false)
    const [response, setResponse] = useState([]);
    const getData = async () => {
        var data = axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: "AIzaSyADv7RoLEruI9sPXmJPXeFsW6nAVuTLWPM",
                q: input.search ? input.search : "sachin tendulkar",
            },
        });
        var response1 = await data;
        const data1 = await response1.data;
        setResponse(data1);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <VideoContext.Provider
            value={{
                response, sideMainVideo, setSideMainVideo,
                sideClick, setSideClick, input, setInput, getData
            }}>
            {children}
        </VideoContext.Provider>
    )
}

// Custom Hook
const useVideoHook = () => {
    return useContext(VideoContext);
}

export default VideoContext;
export { AppProivder, useVideoHook }