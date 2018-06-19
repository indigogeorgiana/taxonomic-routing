import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <h1>Navigating the Taxonomic Ranks</h1>
        <div className='main'>
          <Nav />
          <Home />
        </div>
      </div>
    </Router>
  )
}

export default App
