import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../Store";
import ShareLink from "./ShareLink";
import Albums from "./Albums";
import LoadingSpinner from "./LoadingSpinner";
import NoImage from '/src/no-image.png';

const Artist = () => {
    const [state, dispatch] = useContext(Context);
    let { artistId } = useParams();
    const [thumbnailUrl, setThumbnailUrl] = useState();
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + artistId)
        let data = await result.json()

        if (data['thumbnails']) {
            setThumbnailUrl(data.thumbnails[0].url)
        }
        else {
            setThumbnailUrl(NoImage)
        }

        if (data['products']) {
            setAlbums(data.products.albums.content)
        }

        dispatch({ type: 'SET_ARTIST', payload: data });
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return (
            <LoadingSpinner />
        )
    }

    return (
        <article className="Artist">
            <div className="Info">
                <ShareLink type="artist" id={window.location.pathname.split("/").pop()} />
                <h3>{state.artist.name}</h3>
                <div>
                    <img src={thumbnailUrl} />
                </div>
                <div className="Description">
                    <h4>Biography</h4>
                    <p>{state.artist.description}</p>
                </div>
            </div>
            <div className="BgTextAlbums">
                <div className="ArtistAlbums">
                    {albums.map(album =>
                        <Albums key={album.browseId} album={album} artist={state.artist.name} />
                    )}
                </div>
            </div>
        </article>
    );
}

export default Artist;