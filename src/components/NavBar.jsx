import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="Menu">
            <Link to="/">Search</Link>
            <Link to="/playlists">Playlists</Link>
        </nav>
     );
}
 
export default NavBar;