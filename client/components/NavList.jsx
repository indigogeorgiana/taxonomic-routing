import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../data/ranks'

const NavList = props => {
  const title = props.match.params.rank
  const rank = ranks[title]
  return (
    <div className="homeCont">
      <h2>{title}</h2>
      <ul>
        {
          rank.map(rank => {
            return (
            // eslint-disable-next-line
            <li><Link to={`/list/${rank.name}`}>{rank.name}</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavList
