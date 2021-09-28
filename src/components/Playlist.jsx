import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Store';
import CustomPlaylist from './CustomPlaylist';

const PlayList = () => {
    const [playlistNotSaved, setPlaylistNotSaved] = useState('');
    const [state, dispatch] = useContext(Context);

    const savePlaylist = () =>{
        sessionStorage.setItem('savedPlaylist', JSON.stringify(state.customPlaylist))
    }

    const loadPlaylist = () =>{
        if(localStorage.getItem('savedPlaylist') !== undefined){
            let rawData = sessionStorage.getItem('savedPlaylist')
            let parsedData = JSON.parse(rawData)
            dispatch({ type: 'SET_CUSTOM_PLAYLIST', payload: parsedData })
        }
        else{
            setPlaylistNotSaved('No session playlist could be found.')
        }
    }

    if (state.customPlaylist.length) {
        return (
            <div className="Playlists">
                <div>
                    <h2>Custom Playlist</h2>
                    <button id="Save" onClick={ () => savePlaylist() }>Save Session Playlist</button>
                    <button id="Load" onClick={ () => loadPlaylist() }>Load Session Playlist</button>
                </div>
                <div className="FindMusic">
                    <div className="Results">
                        <div className="Songs">
                            {state.customPlaylist.map(song =>
                                <CustomPlaylist key={song.videoId} song={song} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="Playlists">
                <div>
                    <h2>Custom Playlist is empty</h2>
                    <p>Search for songs and add them to the playlist or load a previously saved session playlist.</p>
                    <button id="Load" onClick={ () => loadPlaylist() }>Load Session Playlist</button>
                    <p>{playlistNotSaved}</p>
                </div>
            </div>
        )
    }

}

export default PlayList;