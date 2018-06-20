import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ranks from '../../data/ranks'

const App = () => {
  const ranksList = Object.keys(ranks)
  return (
    <Router>
      <div>
        <h1>Navigating the taxonomic ranks</h1>
        <div className='Nav'>
          <Nav ranks = {ranksList}/>
        </div>
        <div className='Home'>
          <Home ranks = {ranks}/>
        </div>
      </div>
    </Router>
  )
}

export default App
