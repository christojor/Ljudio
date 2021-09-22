import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Store';
import Songs from './Songs';
import Artists from './Artists';
import Albums from './Albums';
import { useParams } from 'react-router';

const FindMusic = () => {

    const [searchString, setSearchString] = useState('');
    const [state, dispatch] = useContext(Context);
    const notInitialRender = useRef(false)
    let { songId } = useParams()
    let { artistId } = useParams()
    let { albumId } = useParams()

    useEffect( () => {
        if (songId){
            setSearchString(songId)
        }
        else if (artistId){
            setSearchString(artistId)
        }
        else if (albumId){
            setSearchString(albumId)
        }
    },[])

    useEffect(async () => {
        if (notInitialRender.current) {
            try {
                let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + searchString)
                let data = await result.json()
                dispatch({ type: 'SET_SONGS', payload: data.content });

                result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + searchString)
                data = await result.json()
                dispatch({ type: 'SET_ARTISTS', payload: data.content });

                result = await fetch('https://yt-music-api.herokuapp.com/api/yt/search/' + searchString)
                data = await result.json()
                dispatch({ type: 'SET_ALBUMS', payload: data.content.filter(music => music.type == 'album') });
            }
            catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
            }
        }
        else {
            notInitialRender.current = true
        }
    }, [searchString])

    return (
        <div className="FindMusic">
            <div className="Search">
                <input type="text" placeholder="Find songs, artists & albums" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
            </div>
            <div className="Results">
                <div className="BgTextSongs">
                    <div className="Songs">
                        {state.songs.map(song =>
                            <Songs key={song.videoId} song={song} />)}
                    </div>
                </div>
                <div className="BgTextArtists">
                    <div className="Artists">
                        {state.artists.map(artist =>
                            <Artists key={artist.browseId} artist={artist} />)}
                    </div>
                </div>
                <div className="BgTextAlbums">
                    <div className="Albums">
                        {state.albums.map(album =>
                            <Albums key={album.browseId} album={album} artist={album.artist}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindMusic;