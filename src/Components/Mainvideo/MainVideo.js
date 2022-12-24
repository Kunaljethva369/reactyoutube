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
    if (mainVideoData.response.lengh == undefined) {
      currentVideos = mainVideoData.response?.items[0]?.id?.videoId;
      currentVideos1 = `https://www.youtube.com/embed/${currentVideos}?autoplay=1&mute=1`
    }
    else {
      currentVideos = mainVideoData.response?.items[0]?.id?.videoId;
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
            <div className="mainVideo">
              <div className="vid-container">
                <iframe
                  width="859"
                  height="460"
                  src={currentVideos1}
                ></iframe>
              </div>
            </div>
            <div className="sideVideo">
              <SideVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
