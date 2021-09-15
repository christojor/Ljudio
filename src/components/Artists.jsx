import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';

const Artists = (props) => {

const [state, dispatch] = useContext(Context);

    return ( 
                <article onClick={() => dispatch({type: 'SET_PLAYING', payload: props.song})}>
                    <div>
                        <h3>{props.artist.name}</h3>
                    </div>
                    <div>
                        <img src={props.artist.thumbnails[1].url}></img>
                    </div>
                </article>
     );
}

export default Artists;