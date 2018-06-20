import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <div>
        {props.ranks.map(rank => {
          return (
            <div key ='rank'>
              <li><Link to={`/list/${rank}`}>{rank}</Link></li>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Nav
