import React from 'react'
import { useContext } from 'react'
import { Context } from '../Store'
import ShareLink from './ShareLink'

const Songs = (props) => {

const [state, dispatch] = useContext(Context);

const setCurrentSongAndPlaylist = () =>{
    dispatch({type: 'SET_PLAYING', payload: props.song})
    dispatch({type: 'SET_PLAYLIST', payload: [...state.songs]})
}

    return ( 
        <article onClick={() => setCurrentSongAndPlaylist()}>
                <h3>{props.song.name}</h3>
                <p>{props.song.artist.name}</p>
                <ShareLink type={props.song.type} id={props.song.videoId} />
        </article>
     );
}

export default Songs;