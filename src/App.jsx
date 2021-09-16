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
      <header className="Navbar">
        <Logo />
        <NavBar />
      </header>
      <main className="Content">
        <FindMusic />
      </main>
      <footer className="Player">
        <Player />
      </footer>
    </div>
    </Store>
  )
}

export default App
