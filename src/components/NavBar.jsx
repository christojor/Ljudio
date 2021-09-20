import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="Menu">
            <div>
                <Link to="/">Search</Link>
                <Link to="/playlists">Playlists</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;