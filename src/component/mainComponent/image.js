import React from "react";
import "../../style/Image.css";
const image = (url) => {
  return (
    <div>
      <img className="mainImg" src={url.url} />
    </div>
  );
};

export default image;

image.defaultProps = {};
