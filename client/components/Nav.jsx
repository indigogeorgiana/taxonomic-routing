import React from 'react'
import {Link} from 'react-router-dom'
import ranksData from '../../data/ranks.js'

const Nav = (props) => {
  const ranks = Object.keys(ranksData)
  return (
    <div className ='ranksData'>
      <h2> Nav </h2>
        {
          ranks.map(rank => {
            return (
              key={rank.id}
              key={rank.name}
            )
          })
        }
    </div>
  )
}

export default Nav
