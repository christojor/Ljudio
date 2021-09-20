import React, { useState, useEffect, useRef } from "react";

const ProgressSlider = (props) => {

    const [value, setValue] = useState();
    const [playedTime, setPlayedTime] = useState(0);
    const notInitialRender = useRef(false)

    const handleChange = (e, newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        if (notInitialRender.current) {
            setPlayedTime(convertToTimeUnits(props.value))
        } else {
            notInitialRender.current = true
        }
    }, [props.value])

    const convertToTimeUnits = (inputSeconds) => {

        let sec_num = inputSeconds.toFixed(0);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }

        return hours + ':' + minutes + ':' + seconds;
    }

    return (
        <div className="SlideContainer">
            <div>
                <p>{playedTime}</p>
            </div>
            <input type="range" min="0" max={props.max} value={props.value} className="Slider" id="songSlider" readOnly />
            <div>
                <p>{convertToTimeUnits(props.max)}</p>
            </div>
        </div>
    );
}

export default ProgressSlider;