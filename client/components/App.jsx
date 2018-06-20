import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Rank from './Rank'
import RankName from './RankName'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <h1>Navigating the Taxonomic Ranks</h1>
        <div className='main'>
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home} />
          <Route path='/list/:rank' component={Rank} />
          <Route path='/rank/:rank/:name' component={RankName} />

        </div>
      </div>
    </Router>
  )
}

export default App
