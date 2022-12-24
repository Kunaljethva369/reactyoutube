import React from "react";
import { useVideoHook } from "../../Context/VideoContext";
import SideVideo from "../SideVideo/SideVideo";
import "./MainVideo.css";

function MainVideo() {
  const mainVideoData = useVideoHook();
  var currentVideos;
  var currentVideos1;
  var currentVideos1 = `https://www.youtube.com/embed/${currentVideos}?autoplay=1&mute=1`;
  if (mainVideoData.sideClick == false) {
    if (Object.keys(mainVideoData.response).length > 0) {
      currentVideos = mainVideoData.response?.items[0]?.id?.videoId;
      currentVideos1 = `https://www.youtube.com/embed/${currentVideos}?autoplay=1&mute=1`
    }
    else {
      currentVideos = mainVideoData.response[0]?.items[0]?.id?.videoId;
      currentVideos1 = `https://www.youtube.com/embed/${currentVideos}?autoplay=1&mute=1`
    }
  }
  else {
    currentVideos = mainVideoData.sideMainVideo.id.videoId
    currentVideos1 = `https://www.youtube.com/embed/${currentVideos}?autoplay=1&mute=1`
  }
  return (
    <>
      <div className="container w-100">
        <div className="row">
          <div className="d-flex">
            <div className="mainVideo col-lg-8">
              <div className="vid-container">
                <iframe
                  src={currentVideos1}
                  className="iframe"
                ></iframe>
              </div>
            </div>
            <div className="sideVideo col-lg-4">
              <SideVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
