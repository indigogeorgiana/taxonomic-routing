import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'
import species from '../data/species'

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
      <Link to={`/list/${rank}/species`}>Show species</Link>
      <h3>Species</h3>
      <ul>
        {
          species.map(specie => {
            return (
              <li key={specie.id}>{specie.title}</li>
            )
          })
        }
      </ul>
      <Link to='/'><p className="return">Go Home</p></Link>
    </div>
  )
}

export default NavBody
