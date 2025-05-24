import Css from "./LoadMore.module.css";

const LoadMoreBtn = ({}) => {
  const handleLoadMore = () => {
    // Logic to load more images
    console.log("Load more images");
  };
  return (
    <div>
      <button className={Css.button} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
