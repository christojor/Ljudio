import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';

const Songs = (props) => {

const [state, dispatch] = useContext(Context);

    return ( 
        <article onClick={() => dispatch({type: 'SET_PLAYING', payload: props.song})}>
            <h3>{props.song.name}</h3>
            <p>{props.song.artist.name}</p>
        </article>
     );
}
 // id={song.videoId} title={song.name} artist={song.artist.name}
export default Songs;