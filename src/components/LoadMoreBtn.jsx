import Css from "./LoadMore.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  const handleClick = () => {
    loadMore();
  };
  return (
    <div>
      <button className={Css.button} onClick={handleClick}>
        Daha Fazla Yükle
      </button>
    </div>
  );
};

export default LoadMoreBtn;
