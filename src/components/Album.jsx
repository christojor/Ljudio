import React, { useState, useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router';
import { Context } from '../Store';
import ShareLink from './ShareLink';

const Album = () => {
    let { artistName, albumId } = useParams()
    const notInitialRender = useRef(false)
    let [albums, setAlbums] = useState()
    let [album, setAlbum] = useState()
    let [artist, setArtist] = useState()
    const [state, dispatch] = useContext(Context);

    useEffect(async () => {
        try {

            let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artists/' + artistName)
            let data = await result.json()
            let artistResult = data.content.filter(artist => artist.name == artistName)
            setArtist(artistResult[0].browseId)
        }
        catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error });
            console.log('error')
        }
    }, [])

    useEffect(async () => {
        if (notInitialRender.current) {
            try {

                let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + artist)
                let data = await result.json()

                setAlbums(data.products.albums.content.filter(album => album.browseId != albumId))

                const [album] = data.products.albums.content.filter(album => album.browseId == albumId)
                setAlbum(album)
            }
            catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
                console.log('error')
            }
        }
        else {
            notInitialRender.current = true
        }
    }, [artist])

    if (album) {
        return (
            <div className="AlbumPage">
                <article>
                    <div>
                        <h3>{album.name}</h3>
                        <p>{album.artist}</p>
                        <p>{album.year}</p>
                    </div>
                    <div>
                        <img src={album.thumbnails[0].url} />
                    </div>
                </article>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Unfortunately the album could not be found...</h1>
            </div>
        );
    }
}

export default Album;