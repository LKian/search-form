import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ urls, alt_description, id }) => {
    return <img src={urls.thumb} alt={alt_description} key={id} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
