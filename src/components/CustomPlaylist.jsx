import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context } from '../Store'
import ShareLink from './ShareLink'

const CustomPlaylist = (props) => {

    const [state, dispatch] = useContext(Context);

    useEffect( () =>{
        
    },[state.customPlaylist])

    const setCurrentSongAndPlaylist = () => {
        dispatch({ type: 'SET_PLAYING', payload: props.song })
        dispatch({ type: 'SET_PLAYLIST', payload: [...state.customPlaylist] })
    }

    const removeSongFromPlayList = () =>{
        dispatch({ type: 'REMOVE_FROM_CUSTOM_PLAYLIST', payload: props.song })
        dispatch({ type: 'REMOVE_FROM_PLAYLIST', payload: props.song })
    }

    const movePlaylistElement = (array, initialIndex, finalIndex) => {
        array.splice(finalIndex, 0, array.splice(initialIndex, 1)[0])
        return array;
    }

    const moveSong = (pos) =>{
        for(var i = 0; i < state.customPlaylist.length; i++){
            if(state.customPlaylist[i].videoId == props.song.videoId){
                let newListOrder = movePlaylistElement(state.customPlaylist, i, i + pos)
                dispatch({ type: 'SET_CUSTOM_PLAYLIST', payload: newListOrder})
            }
        }
    }

    return (
        <article className="PlaylistSong">
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
            <i className="fas fa-minus-square" title="Remove from playlist" onClick={ () => removeSongFromPlayList()}></i>
            <i className="fas fa-caret-square-up" title="Move up" onClick={ () => moveSong(-1) }></i>
            <i className="fas fa-caret-square-down" title="Move down" onClick={ () => moveSong(1) }></i>
            </div>
        </article>
    );
}

export default CustomPlaylist;