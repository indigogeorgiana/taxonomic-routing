import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'

const NavBody = props => {
  const title = props.match.params.rank
  const name = props.match.params.name
  const rank = ranks[title]

  let description = ''
  for (let blog in ranks[title]) {
    if (rank[blog].name === name) {
      description = rank[blog].description
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
