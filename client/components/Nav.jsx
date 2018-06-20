import React from 'react'
import ranks from '../data/ranks'

const Nav = props => {
  return (
    <div className="nav">
      <h2>Nav</h2>
      <ul>
        {
          Object.keys(ranks).map((rank) => {
            return (
            // eslint-disable-next-line
            <li>{rank}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Nav
