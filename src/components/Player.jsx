import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useContext, useEffect } from 'react';
import { Context } from '../Store';

const Player = () => {
    const [state, dispatch] = useContext(Context);
    let [playing, setPlaying] = useState(false);

    useEffect( () =>{
        setPlaying(true);
    },[state.playing])
    
    return ( 
        <div>
            <ReactPlayer url={'http://www.youtube.com/watch?v=' + state.playing.videoId} width="0px" height="0px" playing={playing} />
            <i className="fas fa-step-backward"></i>
            <i className="far fa-play-circle" onClick={ () => setPlaying(true)}></i>
            <i className="far fa-pause-circle" onClick={ () => setPlaying(false)}></i>
            <i className="fas fa-step-forward"></i>
        </div>
     );
}
 
export default Player;