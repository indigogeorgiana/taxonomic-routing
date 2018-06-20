import React from 'react'
import Nav from './Nav'
import Home from './Home'

// router
import {HashRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='home'>
          <div>
            <h1>Taxonomic Spanks</h1>
          </div>

          {/* <Link to='/home'></Link> */}

          <Route path='/' component={Nav} />

          <Home />

        </div>
      </Router>
    )
  }
}

export default App
