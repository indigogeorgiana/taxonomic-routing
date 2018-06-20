import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import ranks from '../../data/ranks'
import Classif from './Classif'

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
          <Route exact path='/' component={Home} />
          <Route path='/list/:rank' component={Classif}/>
        </div>
      </div>
    </Router>
  )
}

export default App
