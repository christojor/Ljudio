import React, {useState, useEffect} from 'react'

const FindMusic = () => {

    const [searchString, setSearchString] = useState('Master of Puppets');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        let result = await fetch('https://yt-music-api.herokuapp.com/api/yt/search/' + searchString)
        let data = await result.json()
        console.log(data)
    },[])

    return (
        <div>
            <form>
                <label>
                    Find music:
                    <input type="search" name="search" />
                </label>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default FindMusic;