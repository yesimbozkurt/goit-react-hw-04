import React from 'react'
import Styles from './SearchBar.module.css'

const SearchBar = ({  }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.elements.query.value;
        console.log(query);
    }
    return (
        <header className={Styles.SearchBar}>
            <form onSubmit={handleSubmit} className={Styles.SearchForm}>
                <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={Styles.searchBtn}>Search</button>
            </form>
        </header>  
    )
}

export default SearchBar
