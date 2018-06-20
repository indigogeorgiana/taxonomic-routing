import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import ranks from '../../data/ranks'

import Nav from './Nav.jsx'
import Home from './Home.jsx'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>React development has begun!</h1>
          <h2>Nav</h2>
          {
            Object.keys(ranks).map(rank => {
              return <Nav
                key={rank}
                name={rank} />
            })
          }

          <Route path='/list/:rank' render={() => {
            return (
              ranks.map(rank => {
                return <Home
                  key={ranks.rank[name]}
                  name={ranks.rank[name]} />
              })
            )
          }
          } /> 

          {/* <Route path='//list/:rank' component={Home} /> */}

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
