import React from "react";
import SideVideo from "../SideVideo/SideVideo";
import "./MainVideo.css";

function MainVideo(props) {
  var currentVideos;
  var currentVideos1;
  if(props.data.length == 0){
    currentVideos1 = "https://www.youtube.com/embed/fab7f8fd-5be2-4213-8548-bf9e60fc0127";
  }
  else{
    
    currentVideos = props.data.items[0].id.videoId;
    currentVideos1 = `https://www.youtube.com/embed/${currentVideos}`

  }
  return (
    <>
      <div className="container w-100">
        <div className="row">
          <div className="d-flex">
            <div className="mainVideo">
              <div class="vid-container">
                <iframe
                  width="859"
                  height="460"
                  src={currentVideos1}
                ></iframe>
              </div>
            </div>
            <div className="sideVideo">
              <SideVideo videos={props.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainVideo;
