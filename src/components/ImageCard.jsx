import React from "react";

const ImageCard = ({ url, title }) => {
  return (
    <li className={Styles.imageCard}>
      <div>
        <img src={url} alt={title} />
      </div>
    </li>
  );
};

export default ImageCard;
