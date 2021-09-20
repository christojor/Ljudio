import React from 'react'
import { useContext } from 'react'
import { Context } from '../Store'
import ShareLink from './ShareLink'

const Songs = (props) => {

    const [state, dispatch] = useContext(Context);

    const setCurrentSongAndPlaylist = () => {
        dispatch({ type: 'SET_PLAYING', payload: props.song })
        dispatch({ type: 'SET_PLAYLIST', payload: [...state.songs] })
    }

    return (
        <article>
            <div onClick={() => setCurrentSongAndPlaylist()}>
                <div>
                    <h3>{props.song.name}</h3>
                    <h6>Click to play &gt;&gt;</h6>
                </div>
                <div>
                    <p>{props.song.artist.name}</p>
                </div>
            </div>
            <div className="ResultOptions">
            <ShareLink type={props.song.type} id={props.song.videoId} />
            <i className="fas fa-plus-square" title="Add to queue"></i>
            <i className="fas fa-save" title="Save to playlist"></i>
            </div>
        </article>
    );
}

export default Songs;