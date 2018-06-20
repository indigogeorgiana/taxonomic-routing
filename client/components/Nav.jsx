import React from 'react'
import ranks from '../../data/ranks'
import {Link} from 'react-router-dom'

const Nav = () => {
  const rankArr = Object.keys(ranks)
  return (
    <div className='nav'>
      <h2>Nav</h2>
      {rankArr.map((rank) => {
        return (
          <li><Link key={rank} to={`/list/${rank}`}>{`${rank}`} </Link></li>
        )
      })}

    </div>
  )
}

export default Nav
