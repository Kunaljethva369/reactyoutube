import React from "react";
import "./SideVideo.css";

function SideVideo(props) {
  console.log(props.videos)
  const handleClick = (ele) => {
    console.log(props.videos);
    props?.videoClick(ele)
    props.setClick.setClick(true);
  };

  return (
    <>
      <div className="vid-list-container">
        <div className="vid-outer">
          {props.videos[0]?.items?.length > 0
            ? props.videos[0]?.items.map(function (ele, ind) {
                return (
                  <>
                    <div
                      className="vid-inner"
                      onClick={() => {
                        handleClick(ele);
                      }}
                    >
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
