import Styles from "./ImageGallery.module.css";
import ImageCard from "./ImageCard";
import Loader from "./Loader";

const ImageGallery = ({ gallery, loading, selectedImage }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <ul className={Styles.gallery}>
      {gallery.map((image, index) => (
        <ImageCard key={index} data={image} openModal={selectedImage} />
      ))}
    </ul>
  );
};

export default ImageGallery;
