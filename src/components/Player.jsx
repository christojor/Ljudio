import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const Player = () => {

    let [playing, setPlaying] = useState(false);
    
    return ( 
        <div>
            <ReactPlayer url='http://www.youtube.com/watch?v=ysz5S6PUM-U' width="0px" height="0px" playing={playing} />
            <i className="fas fa-step-backward"></i>
            <i className="far fa-play-circle" onClick={ () => setPlaying(true)}></i>
            <i className="far fa-pause-circle" onClick={ () => setPlaying(false)}></i>
            <i className="fas fa-step-forward"></i>
        </div>
     );
}
 
export default Player;