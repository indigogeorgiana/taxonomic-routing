import React from 'react'
import ranks from '../../data/ranks'
import {Link} from 'react-router-dom'

const Rank = (props) => {
  const ranksRank = props.match.params.rank

  return (
    <div className='rank'>
      <h2>{ranksRank}</h2>
      <ul>
        {ranks.ranksRank.map(prop => {
          return (
            <li key={prop.id}>
              <Link to={`/ranks/${prop}/${prop[1].name}`}>
                {`${ranks[prop][1]['name']}`}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Rank
