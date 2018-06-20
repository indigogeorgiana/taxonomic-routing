import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
  const rankName = props.match.params.rank
  console.log(rankName)
  return (
    <div>
      <ul>
        <Link to={`/list`}>{props.name}</Link>
      </ul>
    </div>
  )
}

export default 
