import Css from "./ImageModal.module.css";

const ImageModal = ({ data, closeModal }) => {
  const handleClick = () => {
    closeModal();
  };
  return (
    <>
      {data ? (
        <div className={Css.overlay} onClick={handleClick}>
          <div className={Css.modal}>
            <img src={data.urls.regular} alt={data.alt_description} />
            <div>
              <p className={Css.description}></p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ImageModal;
