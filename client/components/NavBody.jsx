import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'

const NavBody = props => {
  const title = props.match.params.rank
  const name = props.match.params.name
  const rank = ranks[title]

  for (let id in ranks[title]) {
    if (rank[id].name === name) {
      var description = rank[id].description
    }
  }

  return (
    <div className="homeCont">
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to='/'><p className="return">Go Home</p></Link>
    </div>
  )
}

export default NavBody
