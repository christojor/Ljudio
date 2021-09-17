import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';
import ShareLink from './ShareLink';

const Albums = (props) => {

const [state, dispatch] = useContext(Context);

    return ( 
        <div>
                <article>
                    <div>
                        <h3>{props.album.name}</h3>
                        <p>{props.album.artist}</p>
                        <p>{props.album.year}</p>
                    </div>
                    <div>
                    <img src={props.album.thumbnails[0].url} />
                    </div>
                    <ShareLink type={props.album.type} id={props.album.browseId} />
                </article>
        </div>
     );
}
export default Albums;