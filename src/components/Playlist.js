import React, {useState, useEffect} from "react";

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

function Playlist () {
    return(
        <div>
            <h2>Playlist</h2>
            <ul>
                {sampleData.map((song,index) => (<li>{song.song} <br /> {song.artist} <br /> {song.album} </li>))}
            </ul>

            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;