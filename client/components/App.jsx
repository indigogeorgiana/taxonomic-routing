import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import ranks from '../../data/ranks'

import Nav from './Nav'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>React development has begun!</h1>

          <Route path='/ranks/:name' component={Nav}
          <p>{ranks.kingdoms[0].name}</p>

        </div>

      </Router>
    )
  }
}


export default App
