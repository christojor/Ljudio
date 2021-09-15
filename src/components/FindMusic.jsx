import React, {useState, useEffect, useContext} from 'react'
import { Context } from '../Store';
import Songs from './Songs';

const FindMusic = () => {

    const [searchString, setSearchString] = useState('Master of Puppets');
    const [state, dispatch] = useContext(Context);

    useEffect(async () => {
        try{
            let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchString)
            let data = await result.json()
            dispatch({type: 'SET_MUSIC', payload: data.content});
        }
        catch(error){
            dispatch({type: 'SET_ERROR', payload: error});
        }
    },[searchString])

    return (
        <div className="Search">
            <input value={searchString} onChange={(e)=>setSearchString(e.target.value)} />

            { state.music.map(song => 
            <Songs key={song.videoId} song={song} />) }
        </div>
    );
}

export default FindMusic;