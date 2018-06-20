import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'

const Details = (props) => {
  const rankName = props.match.params.rank
  const rankDesName = props.match.params.name
  const thisRanks = ranks[rankName]

  const tmp = thisRanks.filter(c => c.name === rankDesName)
  var desc = []
  tmp.map(thisRank => {
    desc = thisRank.description
  })

  // const desc = thisRanks.desc
  return (
    <div>
      <h2> {rankDesName} </h2>
      <p> {desc} </p>
    </div>
  )
}

export default Details
