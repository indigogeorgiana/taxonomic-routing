import React from 'react'
import {HashRouter as Link} from 'react-router-dom'

const Nav = Props => {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>{Props.name}</li>
      </ul>
    </div>
  )
}

export default Nav
