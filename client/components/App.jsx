import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Navigating the taxonomic ranks</h1>
        <div className='Nav'>
          <Nav/>
        </div>
        <div className='Home'>
          <Home/>
        </div>
      </div>
    </Router>
  )
}

export default App
