import React from "react";
import "./SideVideo.css";

function SideVideo(props) {
  return (
    <>
      <div className="vid-list-container">
        <div className="vid-outer">
          {props.videos?.items?.length > 0
            ? props.videos?.items.map(function (ele) {
                return (
                  <>
                    <div className="vid-inner">
                      <span className="vid-thumb"></span>
                      <img
                        width="72"
                        src={ele.snippet.thumbnails.default.url}
                      />
                      <div className="desc">{ele.snippet.title}</div>
                    </div>
                  </>
                );
              })
            : "Loading"}
        </div>
      </div>
    </>
  );
}

export default SideVideo;
