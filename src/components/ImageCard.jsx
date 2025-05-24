import React from "react";
import Styles from "./ImageGallery.module.css";

const ImageCard = ({ data, openModal }) => {
  const handleClick = () => {
    openModal(data);
  };
  return (
    <li className={Styles.imageCard} onClick={handleClick}>
      <div>
        <img src={data.urls.small} alt={data.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
