import React from 'react'
import ranks from '../../data/ranks'
import {Link} from 'react-router-dom'

const Rank = (props) => {
  const ranksRank = props.match.params.rank
  const rank = ranks[ranksRank]
  return (
    <div className='rank'>
      <h2>{ranksRank}</h2>
      <ul>
        {rank.map(rank => {
          return (
            <li key={rank.id}>
              <Link to={`/ranks/${ranksRank}/${rank.name}`}>
                {rank.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Rank
