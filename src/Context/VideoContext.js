import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VideoContext = createContext();

const AppProivder = ({ children }) => {
    const [input, setInput] = useState({ search: "" });
    const [sideMainVideo, setSideMainVideo] = useState([]);
    const [sideClick, setSideClick] = useState(false)
    const [response, setResponse] = useState([]);
    // const getData = async () => {
    // var data = axios.get("https://www.googleapis.com/youtube/v3/search", {
    //     params: {
    //         part: "snippet",
    //         type: "video",
    //         maxResults: 5,
    //         key: "AIzaSyADv7RoLEruI9sPXmJPXeFsW6nAVuTLWPM",
    //         q: input.search ? input.search : "sachin tendulkar",
    //     },
    // });
    // var response1 = await data;
    // const data1 = await response1.data;
    var data1 = [
        {
            kind: "youtube#searchListResponse",
            etag: "XHEWPfr9bzBvDPD4z_SYh90_mLI",
            nextPageToken: "CAUQAA",
            regionCode: "IN",
            pageInfo: {
                totalResults: 252734,
                resultsPerPage: 5,
            },
            items: [
                {
                    kind: "youtube#searchResult",
                    etag: "-yXwtSL-4Dw1bEU3MUhvTdOywoI",
                    id: {
                        kind: "youtube#video",
                        videoId: "zx0YGEi32r0",
                    },
                    snippet: {
                        publishedAt: "2022-09-15T14:30:11Z",
                        channelId: "UCafUh796DToiY2U3s7X_WTw",
                        title: "Anuv Jain - MAZAAK (Official Video)",
                        description:
                            "The ninth studio recorded single, written, sung and composed by #AnuvJain is here! Yeh bhi #MAZAAK hi toh hai… how absurd is ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/zx0YGEi32r0/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/zx0YGEi32r0/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/zx0YGEi32r0/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Anuv Jain",
                        liveBroadcastContent: "none",
                        publishTime: "2022-09-15T14:30:11Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "bnSgPFCIL36mfgA3F0xmFKnlH0I",
                    id: {
                        kind: "youtube#video",
                        videoId: "PJWemSzExXs",
                    },
                    snippet: {
                        publishedAt: "2016-07-09T17:21:05Z",
                        channelId: "UCafUh796DToiY2U3s7X_WTw",
                        title: "BAARISHEIN (Studio) Anuv Jain",
                        description:
                            "Apple Music: http://itunes.apple.com/album/id/1388608634 iTunes: ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/PJWemSzExXs/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/PJWemSzExXs/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/PJWemSzExXs/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Anuv Jain",
                        liveBroadcastContent: "none",
                        publishTime: "2016-07-09T17:21:05Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "qMr2lfQKehbhG2kfXnI3HeCU-ZQ",
                    id: {
                        kind: "youtube#video",
                        videoId: "SmaY7RfBgas",
                    },
                    snippet: {
                        publishedAt: "2021-07-15T14:30:11Z",
                        channelId: "UCafUh796DToiY2U3s7X_WTw",
                        title: "Anuv Jain - GUL (Studio)",
                        description:
                            "The seventh studio recorded single, written, sung and composed by #AnuvJain is here! #GUL talks about how we all search for ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/SmaY7RfBgas/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/SmaY7RfBgas/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/SmaY7RfBgas/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Anuv Jain",
                        liveBroadcastContent: "none",
                        publishTime: "2021-07-15T14:30:11Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "0qPEKpwiACUJxMNc7lHAMSxDTMU",
                    id: {
                        kind: "youtube#video",
                        videoId: "9et5qzuzbQM",
                    },
                    snippet: {
                        publishedAt: "2019-07-21T14:30:05Z",
                        channelId: "UCafUh796DToiY2U3s7X_WTw",
                        title: "RIHA by Anuv Jain (Studio)",
                        description:
                            "The third studio recorded single, written, sung and composed by Anuv Jain is here! Like, SHARE, Comment and Subscribe to the ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/9et5qzuzbQM/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/9et5qzuzbQM/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/9et5qzuzbQM/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Anuv Jain",
                        liveBroadcastContent: "none",
                        publishTime: "2019-07-21T14:30:05Z",
                    },
                },
                {
                    kind: "youtube#searchResult",
                    etag: "azxbdBkzHB54wXHXH8Kh3vfuHsI",
                    id: {
                        kind: "youtube#video",
                        videoId: "0P3Gt-60yLc",
                    },
                    snippet: {
                        publishedAt: "2020-11-26T14:30:10Z",
                        channelId: "UCafUh796DToiY2U3s7X_WTw",
                        title: "Anuv Jain - MISHRI (Studio)",
                        description:
                            "The sixth studio recorded single, written, sung and composed by #AnuvJain is here! Now available on all streaming platforms: ...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/0P3Gt-60yLc/default.jpg",
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/0P3Gt-60yLc/mqdefault.jpg",
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/0P3Gt-60yLc/hqdefault.jpg",
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Anuv Jain",
                        liveBroadcastContent: "none",
                        publishTime: "2020-11-26T14:30:10Z",
                    },
                },
            ],
        },
    ];
    // };
    useEffect(() => {
        setResponse(data1);
        // getData();
    }, []);
    return (
        <VideoContext.Provider
            value={{
                response, sideMainVideo, setSideMainVideo,
                sideClick, setSideClick, input, setInput
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