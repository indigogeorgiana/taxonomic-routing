import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>Navigating the Taxonomic Ranks</h1>

          <Link to='/nav'>Nav</Link> - {' '}
          <Link to='/home'>Home</Link>

          <Route exact path='/' component={Home} />
          <Route path='/nav/' component={Nav} />

          

        </div>
      </Router>
    )
  }
}

export default App
