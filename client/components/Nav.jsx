import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'

const Nav = (props) => {
  return (
    <div>
      <h2>Nav</h2>
      <div>
        {props.ranks.map(rank => {
          return (
            <div key ='rank'>
              <li><Link to= 'list/{rank}'>{rank}</Link></li>
              <Route path='/list/:rank' component={Home} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Nav
