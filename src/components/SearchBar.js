import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';

function SearchBar () {

    return(
        <div>
            <label htmlFor='search'>Find your tune</label> <br />
            <input 
            type='text'
            name="search"/> <br />
            <button className={styles.button}>Submit</button>
        </div>
    )
}

export default SearchBar;