import React, {useState, useEffect} from 'react';
import styles from './SearchResults.module.css';

const sampleData = [{
    artist: 'rihanna',
    album: 'x',
    song: 'umbrella'
},
{
    artist: 'taylor swift',
    album: 'y',
    song: 'love song'
},
{
    artist: 'annenmay',
    album: 'z',
    song: 'ausgehen'
},
{
    artist: 'selda bagcan',
    album: 'w',
    song: 'yalan dünya'
}]

function SearchResults () {
    return(
        <div className={styles.leftBox}>
            <h2>Results</h2>
            <ul>
                {sampleData.map((song,index) => (<li>{song.song} <br /> {song.artist} <br /> {song.album} </li>))}
            </ul>
        </div>
    )
}

export default SearchResults;