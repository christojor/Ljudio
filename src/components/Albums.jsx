import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';

const Albums = (props) => {

const [state, dispatch] = useContext(Context);

    return ( 
        <div>
                <article onClick={() => dispatch({type: 'SET_PLAYING', payload: props.song})}>
                    <div>
                        <h3>{props.album.name}</h3>
                        <p>{props.album.artist}</p>
                        <p>{props.album.year}</p>
                    </div>
                    <div>
                    <img src={props.album.thumbnails[0].url} />
                    </div>
                </article>
        </div>
     );
}
 // id={song.videoId} title={song.name} artist={song.artist.name}
export default Albums;