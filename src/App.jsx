import React, {useState} from 'react'
import NavBar from './components/NavBar'
import PlayList from './components/Playlist'
import FindMusic from './components/FindMusic'
import Player from './components/Player'
import Logo from './components/Logo'
import Store from './Store'

function App() {

  return (
    <Store>
    <div className="App">
      <div className="Navbar">
        <Logo />
        <NavBar />
      </div>
      <div className="Content">
        <PlayList />
        <FindMusic />
      </div>
      <div className="Player">
        <Player />
      </div>
    </div>
    </Store>
  )
}

export default App
