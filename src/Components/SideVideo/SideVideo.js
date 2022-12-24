import React from "react";
import { useVideoHook } from "../../Context/VideoContext";
import "./SideVideo.css";

function SideVideo() {
  const sideVideoData = useVideoHook();
  const handleClick = (e) => {
    sideVideoData.setSideClick(true);
    sideVideoData.setSideMainVideo(e);
  }

  return (
    <>
      <div className="vid-list-container">
        <div className="vid-outer">
          {
            sideVideoData?.response?.items?.length > 0 ?
              sideVideoData?.response?.items.map(function (ele, ind) {
                return (
                  <>
                    <div className="vid-inner" onClick={() => { handleClick(ele) }}>
                      <span className="vid-thumb"></span>
                      <img
                        width="72"
                        src={ele.snippet.thumbnails.default.url}
                      />
                      <div className="desc">
                        <p className="hideExtra">{ele.snippet.title}</p>
                      </div>
                    </div>
                  </>
                );
              })
              : 'Loading...'}
        </div>
      </div>
    </>
  );
}

export default SideVideo;
