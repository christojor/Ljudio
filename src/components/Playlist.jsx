import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Store';
import Songs from './Songs';

const PlayList = () => {
    const [state, dispatch] = useContext(Context);
    return (
        <div className="Playlists">
            <div>
                <h2>Current Playlist</h2>
            </div>
            <div className="FindMusic">
                <div className="Results">
                    <div className="Songs">
                        {state.currentPlaylist.map(song =>
                            <Songs key={song.videoId} song={song} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayList;