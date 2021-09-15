import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../Store';
import Results from './Results';

const FindMusic = () => {

    const [searchString, setSearchString] = useState('Master of Puppets');
    const [state, dispatch] = useContext(Context);

    useEffect(async () => {
        try{
            let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchString)
            let data = await result.json()
            console.log(data.content)
            dispatch({type: 'SET_MUSIC', payload: data.content});
            console.log(state.songs)
        }
        catch(error){
            dispatch({type: 'SET_ERROR', payload: error});
            console.log(state.error)
        }
    },[searchString])

    return (
        <div className="Search">
            <input value={searchString} onChange={(e)=>setSearchString(e.target.value)} />

            { state.music.map(song => 
            <Results key={song.videoId} title={song.name} artist={song.artist.name} />) }
        </div>
    );
}

export default FindMusic;