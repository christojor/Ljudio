import React, { useEffect, useState, useContext } from "react";
import { Context } from "../Store";

const CurrentSong = (props) => {

    const [state, dispatch] = useContext(Context);
    const [thumbnail, setThumbnail] = useState('');
    const [artist, setArtist] = useState('');
    const [songName, setSongName] = useState('');

    useEffect(() => {
        if (props.isPlaying) {
            setThumbnail(state.playing.thumbnails[0].url);
            setArtist(state.playing.artist.name);
            setSongName(state.playing.name);
        }
    }, [props.isPlaying, state.playing])

    return (
        <>
            <div>
                <img src={thumbnail}></img>
            </div>
            <div>
                <h5>{songName}</h5>
                <p>{artist}</p>
            </div>
        </>
    );
}

export default CurrentSong;