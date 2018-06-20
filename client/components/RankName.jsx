import React from 'react'
import ranks from '../../data/ranks'

const RankName = (props) => {
  const name = props.match.params.name
  const ranksRank = props.match.params.rank
  const rank = ranks[ranksRank]
  let id = null
  for (let index in rank) {
    if (rank[index].name === name) {
      id = index
    }
  }

  return (
    <div className='rankName'>
      <h2>{name}</h2>

      <p>{rank[id].description}</p>
    </div>
  )
}
export default RankName
