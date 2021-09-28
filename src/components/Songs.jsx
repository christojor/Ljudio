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

    const addSongToPlayList = () => {

        if (!state.customPlaylist.filter(e => e.videoId === props.song.videoId).length > 0){ // Check if song is already in playlist
            dispatch({ type: 'ADD_TO_CUSTOM_PLAYLIST', payload: props.song }) // Add if not in playlist
        }
    }

    return (
        <article>
            <div onClick={() => setCurrentSongAndPlaylist()}>
                <div>
                    <h3>{props.song.name}</h3>
                </div>
                <div>
                    <p>{props.song.artist.name}</p>
                </div>
            </div>
            <div className="ResultOptions">
                <ShareLink type={props.song.type} id={props.song.videoId} />
                <i className="fas fa-plus-square" title="Add to playlist" onClick={() => addSongToPlayList()}></i>
            </div>
        </article>
    );
}

export default Songs;