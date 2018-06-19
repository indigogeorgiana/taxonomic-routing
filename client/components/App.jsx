import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Home from '/Home'
import Nav from '/Nav'

const App = () => {
  return (
    <Router>
      <h1>Navigating the Taxonomic Ranks</h1>

      <Link to='/nav'>Nav</Link>
      
      <Route exact path = '/' component={Home} />
      <Route path = '/nav' component={Nav} />

    </Router>
  )
}

export default App
