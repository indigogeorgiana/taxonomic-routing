import React from 'react'
import Ranks from '../data/ranks'

const NavList = props => {
  const name = props.match.params.rank
  return (
    <div className="homeCont">
      <h2>{name}</h2>
      <ul>
        {
          Object.keys(Ranks).map((rank) => {
            return (
            // eslint-disable-next-line
            <a href="#"><li>{rank.id}</li></a>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavList
