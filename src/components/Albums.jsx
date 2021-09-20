import React, { useContext, useState } from 'react'
import { Context } from '../Store';
import ShareLink from './ShareLink';
import { useHistory } from 'react-router';

const Albums = (props) => {

    const [state, dispatch] = useContext(Context);
    const history = useHistory();
    const [album, setAlbum] = useState(props);

    const handleClick = () => history.push('/album/' + encodeURIComponent(props.artist) + '/' + props.album.browseId);

    return (
        <article>
            <div onClick={() => handleClick()}>
                <div>
                    <h3>{props.album.name}</h3>
                    <p>{props.album.artist}</p>
                    <p>{props.album.year}</p>
                </div>
                <div>
                    <img src={props.album.thumbnails[0].url} />
                </div>
            </div>
            <ShareLink type={props.album.type} id={props.album.browseId} artist={props.artist} />
        </article>
    );
}
export default Albums;