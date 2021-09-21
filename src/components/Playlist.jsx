import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Store';
import CustomPlaylist from './CustomPlaylist';

const PlayList = () => {
    const [state, dispatch] = useContext(Context);

    if(state.customPlaylist.length){
        return (
            <div className="Playlists">
                <div>
                    <h2>Custom Playlist</h2>
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
        )}
    else{
        return (
            <div className="Playlists">
                <div>
                    <h2>Custom Playlist is empty</h2>
                    <p>Search for songs and add them to the playlist.</p>
                </div>
                </div>
        )
    }
    
}

export default PlayList;