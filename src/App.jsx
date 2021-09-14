import React, {useState} from 'react'
import NavBar from './components/NavBar'
import PlayList from './components/Playlist'
import FindMusic from './components/FIndMusic'
import Player from './components/Player'

function App() {

  return (
    <div className="App">
      <div className="Navbar">
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
