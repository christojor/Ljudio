import React, {useState, useEffect} from 'react'
import Results from './Results';

const FindMusic = () => {

    const [searchString, setSearchString] = useState('Master of Puppets');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchString)
        let data = await result.json()
        console.log(data.content)
        setSearchResults(data.content)
        console.log(searchResults)
    },[searchString])

    return (
        <div className="Search">
            <input value={searchString} onChange={(e)=>setSearchString(e.target.value)} />

            { searchResults.map(song => 
            <Results key={song.videoId} title={song.name} artist={song.artist.name} />
        ) }
        </div>
    );
}

export default FindMusic;