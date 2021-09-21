import React from 'react'

const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SONGS':
            return {
                ...state,
                songs: action.payload
            };
        case 'SET_ARTISTS':
            return {
                ...state,
                artists: action.payload
            };
        case 'SET_ARTIST':
            return {
                ...state,
                artist: action.payload
            };
        case 'SET_ALBUMS':
            return {
                ...state,
                albums: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.payload
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                currentPlaylist: action.payload
            };
        case 'ADD_TO_PLAYLIST':
            return {
                ...state,
                currentPlaylist: state.currentPlaylist.concat(action.payload)
            };
        case 'REMOVE_FROM_PLAYLIST':
            return {
                ...state,
                currentPlaylist: state.currentPlaylist.filter(song => song.videoId !== action.payload.videoId)
            };
        case 'SET_CUSTOM_PLAYLIST':
            return {
                ...state,
                customPlaylist: action.payload
            };
        case 'ADD_TO_CUSTOM_PLAYLIST':
            return {
                ...state,
                customPlaylist: state.customPlaylist.concat(action.payload)
            };
        case 'REMOVE_FROM_CUSTOM_PLAYLIST':
            return {
                ...state,
                customPlaylist: state.customPlaylist.filter(song => song.videoId !== action.payload.videoId)
            };
        default:
            return state;
    }
}
 
export default Reducer;