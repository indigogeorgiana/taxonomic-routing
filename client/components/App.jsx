import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Nav from './Nav.jsx'
import List from './List.jsx'
import Details from './Details.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>React development has begun!</h1>
          <Nav />

          <Route path='/list/:name' component={List} />
          <Route path='/rank/:rank/:name' component={Details} />

        </div>

      </Router>
    )
  }
}

export default App


