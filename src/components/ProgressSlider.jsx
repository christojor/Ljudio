import React, { useState, useEffect, useRef } from "react"

const ProgressSlider = (props) => {

    const [value, setValue] = useState()
    const [playedTime, setPlayedTime] = useState('00:00:00')
    const [duration, setDuration] = useState('00:00:00')
    const notInitialRender = useRef(false)

    useEffect(() => {
        if (notInitialRender.current) {
            if (props.value != 0) {
                setPlayedTime(convertToTimeUnits(props.value))
            }
            if (props.max != 0) {
                setDuration(convertToTimeUnits(props.max))
            }
        } else {
            notInitialRender.current = true
        }
    }, [props.value])

    const convertToTimeUnits = (inputSeconds) => {

        let sec_num = inputSeconds.toFixed(0)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
        let seconds = sec_num - (hours * 3600) - (minutes * 60)

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }

        return hours + ':' + minutes + ':' + seconds
    }

    const handleChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="SlideContainer">
            <div>
                <p>{playedTime}</p>
            </div>
            <input type="range" min="0" max={props.max} value={props.value} className="Slider" id="songSlider" onChange={handleChange} />
            <div>
                <p>{duration}</p>
            </div>
        </div>
    );
}

export default ProgressSlider;