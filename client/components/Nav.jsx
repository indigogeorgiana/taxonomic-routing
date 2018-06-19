import React from 'react'
import ranks from '../../data/ranks'

const Nav = (props) => {
  const ranksArr = Object.keys(ranks)
  return (
    <div className='nav'>
      <h2>Nav</h2>
      <ul>
        {ranksArr.map(rank => {
          return (
            <a href='#'><li>{rank}</li></a>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
