import React from 'react'
import {Link} from 'react-router-dom'

const Nav = props => {
  return (
    <div>
      <ul>
        <Link to={`/list/${props.name}`}>{props.name}</Link>
      </ul>
    </div>
  )
}

export default Nav
