import React from 'react'
import Nav from './Nav'
import Home from './Home'
const App = () => {
  return (
    <div className='home'>
      <div>
        <h1>Taxonomic Wanks</h1>
      </div>
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
