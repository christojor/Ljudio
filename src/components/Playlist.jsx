import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Store';
import CustomPlaylist from './CustomPlaylist';

const PlayList = () => {
    const [playlistNotSaved, setPlaylistNotSaved] = useState('');
    const [state, dispatch] = useContext(Context);

    const savePlaylist = () =>{
        localStorage.setItem('savedPlaylist', JSON.stringify(state.customPlaylist))
    }

    const loadPlaylist = () =>{
        if(localStorage.getItem('savedPlaylist') !== null){
            let rawData = localStorage.getItem('savedPlaylist')
            let parsedData = JSON.parse(rawData)
            dispatch({ type: 'SET_CUSTOM_PLAYLIST', payload: parsedData })
        }
        else{
            setPlaylistNotSaved('No playlist saved. Add songs to the playlist and press the "Save Playlist" button to add the playlist to browser storage.')
        }
    }

    const deletePlaylist = () =>{
        if(localStorage.getItem('savedPlaylist') !== null)
        {
            localStorage.removeItem('savedPlaylist')
        }
        dispatch({ type: 'SET_CUSTOM_PLAYLIST', payload: [] })
    }

    if (state.customPlaylist.length) {
        return (
            <div className="Playlists">
                <div>
                    <h2>Custom Playlist</h2>
                    <button id="Save" onClick={ () => savePlaylist() }>Save Playlist</button>
                    <button id="Load" onClick={ () => loadPlaylist() }>Load Playlist</button>
                    <button id="Delete" onClick={ () => deletePlaylist() }>Delete Playlist</button>
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
                    <button id="Load" onClick={ () => loadPlaylist() }>Load Playlist</button>
                    <p>{playlistNotSaved}</p>
                </div>
            </div>
        )
    }

}

export default PlayList;