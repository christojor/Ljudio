import React, { useState, useRef, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Context } from '../Store';
import CurrentSong from './CurrentSong';
import ProgressSlider from './ProgressSlider';

const Player = () => {
    const [state, dispatch] = useContext(Context);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState({playedSeconds: 0});
    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
            setPlaying(true)
        } else {
          notInitialRender.current = true
        }
      }, [state.playing])


      const playSong = () =>{
          if(state.playing.length){
              setPlaying(true)
          }
      }

    const nextSong = () =>{
        for(var i = 0; i < state.currentPlaylist.length - 1; i++){
            if(state.currentPlaylist[i].videoId == state.playing.videoId){
                dispatch({ type: 'SET_PLAYING', payload: state.currentPlaylist[i+1]});
            }
        }
    }

    const previousSong = () =>{
        for(var i = 0; i < state.currentPlaylist.length - 1; i++){
            if(state.currentPlaylist[i].videoId == state.playing.videoId && i != 0){
                dispatch({ type: 'SET_PLAYING', payload: state.currentPlaylist[i-1]});
            }
        }
    }
    
    return (
        <>
            <div className="CurrentSong">
                <CurrentSong isPlaying={playing} />
            </div>
            <div className="Controls">
                <ReactPlayer 
                    url={'http://www.youtube.com/watch?v=' + state.playing.videoId} 
                    width="0px" height="0px" 
                    playing={playing}
                    onDuration={setDuration}
                    onProgress={setProgress} 
                    onEnded={ () => nextSong() }/>
                    <div className="PlayerButtons">
                <i className="fas fa-step-backward" onClick={() => previousSong()}></i>
                <i className="far fa-play-circle" onClick={() => playSong()}></i>
                <i className="far fa-pause-circle" onClick={() => setPlaying(false)}></i>
                <i className="fas fa-step-forward" onClick={() => nextSong()}></i>
                </div>
                <div className="Progress">
                    <ProgressSlider max={duration} value={progress.playedSeconds}/>
                </div>
            </div>

        </>
    );
}
 
export default Player;