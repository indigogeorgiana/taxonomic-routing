import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Nav from './Nav.jsx'
import List from './List.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>React development has begun!</h1>
          <Nav />
          {/* <List /> */}

          <Route path='/list/:name' component={List} />

        </div>

      </Router>
    )
  }
}

export default App

// <Link to='/nav'>Nav</Link> - {' '}
// <div>
// <Route path='/nav/:name' render={() => {
//     return (
//       ranks.map(rank => {
//         return <Nav
//           key={rank.id}
//           name={rank.name}
//           descr={rank.description} />
//       })
//     )
//   }} />
// </div>
// </div>
