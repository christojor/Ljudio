import React, { useState, useRef, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Context } from '../Store'
import CurrentSong from './CurrentSong'
import ProgressSlider from './ProgressSlider'

const Player = () => {
    const [state, dispatch] = useContext(Context)
    const [playing, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [seek, setSeek] = useState(0)
    const [progress, setProgress] = useState({playedSeconds: 0})
    const notInitialRender = useRef(false)
    const player = useRef()

    useEffect(() => {
        if (notInitialRender.current) {
            setPlaying(true)
        } else {
          notInitialRender.current = true
        }
      }, [state.playing])


      const playSong = () =>{
          if(Object.keys(state.playing).length !== 0){
              setPlaying(true)
          }
      }

    const nextSong = () =>{
        for(let i = 0; i < state.currentPlaylist.length - 1; i++){
            if(state.currentPlaylist[i].videoId == state.playing.videoId){
                dispatch({ type: 'SET_PLAYING', payload: state.currentPlaylist[i+1]})
            }
        }
    }

    const previousSong = () =>{
        for(let i = 0; i < state.currentPlaylist.length; i++){
            if(state.currentPlaylist[i].videoId == state.playing.videoId && i != 0){
                dispatch({ type: 'SET_PLAYING', payload: state.currentPlaylist[i-1]})
            }
        }
    }

    const onChange = (data) => {
        setSeek(data)
        player.current.seekTo(seek)
    }
    
    return (
        <>
            <div className="CurrentSong">
                <CurrentSong isPlaying={playing} />
            </div>
            <div className="Controls">
                <ReactPlayer
                    ref={player}
                    url={'http://www.youtube.com/watch?v=' + state.playing.videoId} 
                    width="0px" height="0px" 
                    playing={playing}
                    onDuration={setDuration}
                    onProgress={setProgress} 
                    onEnded={ () => nextSong()} 
                    />
                    <div className="PlayerButtons">
                <i className="fas fa-step-backward" onClick={() => previousSong()}></i>
                <i className="far fa-play-circle" onClick={() => playSong()}></i>
                <i className="far fa-pause-circle" onClick={() => setPlaying(false)}></i>
                <i className="fas fa-step-forward" onClick={() => nextSong()}></i>
                </div>
                    <ProgressSlider max={duration} value={progress.playedSeconds} onChange={(e) => { onChange(e) }}/>
            </div>

        </>
    );
}
 
export default Player