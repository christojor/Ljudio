import React, {useState} from 'react'
import NavBar from './components/NavBar'
import PlayList from './components/Playlist'
import FindMusic from './components/FIndMusic'
import Player from './components/Player'
import Logo from './components/Logo'

function App() {

  return (
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
  )
}

export default App
