import React from "react";
import Styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ searchPhoto }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    searchPhoto(query);
    if (query.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    if (query.length < 2) {
      toast.error("Please enter at least 2 characters");
      return;
    }
  };
  return (
    <header className={Styles.SearchBar}>
      <form onSubmit={handleSubmit} className={Styles.SearchForm}>
        <input
          name="query"
          className={Styles.input}
          type="text"
          placeholder="Search images and photos"
        />
        <button type="submit" className={Styles.searchBtn}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
