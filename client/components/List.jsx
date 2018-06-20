import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'

const List = (props) => {
  const rankName = props.match.params.name
  const thisRanks = ranks[rankName]
  return (
    <div>
      <h2>{rankName}</h2>
      <ul>
        {
          thisRanks.map(thisRank => {
            return <li key={thisRank.name}> <Link to={`/`}>{thisRank.name}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

export default List
