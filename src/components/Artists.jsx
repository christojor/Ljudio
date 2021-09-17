import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';
import ShareLink from './ShareLink';

const Artists = (props) => {

const [state, dispatch] = useContext(Context);

    return ( 
                <article>
                    <div>
                        <h3>{props.artist.name}</h3>
                    </div>
                    <div>
                        <img src={props.artist.thumbnails[1].url}></img>
                    </div>
                    <ShareLink type={props.artist.type} id={props.artist.browseId} />
                </article>
     );
}

export default Artists;