import React from 'react'
import { useContext } from 'react';
import { Context } from '../Store';
import ShareLink from './ShareLink';
import { useHistory } from 'react-router';

const Artists = (props) => {

const [state, dispatch] = useContext(Context);

const history = useHistory();

  const handleClick = () => history.push('/artist/' + props.artist.browseId);

    return ( 
                <article onClick={ () => handleClick()}>
                    <div>
                        <h3>{props.artist.name}</h3>
                        <h6>Click for more info &gt;&gt;</h6>
                    </div>
                    <div>
                        <img src={props.artist.thumbnails[1].url}></img>
                    </div>
                    <ShareLink type={props.artist.type} id={props.artist.browseId} />
                </article>
     );
}

export default Artists;