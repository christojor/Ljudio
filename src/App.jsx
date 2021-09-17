import React, { useState } from 'react'
import NavBar from './components/NavBar'
import PlayList from './components/Playlist'
import FindMusic from './components/FindMusic'
import Player from './components/Player'
import Logo from './components/Logo'
import NotFound from './components/NotFound'
import Store from './Store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (
    <Store>
      <Router>
        <div className="App">
          <header className="Navbar">
            <Logo />
            <NavBar />
          </header>
          <main className="Content">
            <Switch>
              <Route exact path="/">
                <FindMusic />
              </Route>
              <Route exact path="/track/:songId">
                <FindMusic />
              </Route>
              <Route exact path="/artist/:artistId">
                <FindMusic />
              </Route>
              <Route exact path="/album/:albumId">
                <FindMusic />
              </Route>
              <Route exact path="/playlists">
                <PlayList />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </main>
          <footer className="Player">
            <Player />
          </footer>
        </div>
      </Router>
    </Store>
  )
}

export default App
