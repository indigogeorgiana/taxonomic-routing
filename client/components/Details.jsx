import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'

const Details = (props) => {
  const rankName = props.match.params.rank
  const rankDesName = props.match.params.name
  const thisRanks = ranks[rankName]
  console.log(rankDesName)
  return (
    <div>
      <h2>{rankName}</h2>
      <div>
        {
        }
      </div>
    </div>
  )
}

export default Details

// {
//   thisRanks.map(thisRank => {
//     return <li key={thisRank.name}> <Link to={`/rank/${rankName}/${thisRank.name}`}>{thisRank.name}</Link></li>
//   })
// }
