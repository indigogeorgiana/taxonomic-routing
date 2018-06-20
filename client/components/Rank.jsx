import React from 'react'
import ranks from '../../data/ranks'

const Rank = (props) => {
  const ranksArr = Object.keys(ranks)
  const rank = props.match.params.rank
  
  return (
    <div className='nav'>
      <h2>{rank}</h2>
      <ul>
        {ranksArr.map(rank => {
          return (
            <a href='{rank.}'><li>{rank}</li></a>
          )
        })}
      </ul>
    </div>
  )
}

export default Rank