import React from 'react'

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MUSIC':
            return {
                ...state,
                music: action.payload
            };
        case 'ADD_MUSIC':
            return {
                ...state,
                music: state.music.concat(action.payload)
            };
        case 'REMOVE_MUSIC':
            return {
                ...state,
                music: state.music.filter(song => song.videoId !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
 
export default Reducer;