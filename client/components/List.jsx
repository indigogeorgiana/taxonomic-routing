import React from 'react'
import {Link} from 'react-router-dom'
import ranks from '../../data/ranks'

const List = (props) => {
  const rankName = props.match.params.name
  return (
    <div>
      <h2>{rankName}</h2>
      <ul>
        <Link to={`/list`}></Link>
      </ul>
    </div>
  )
}

export default List


// {
//   return (
//     Object.keys(ranks).map(rank => {
//       console.log(ranks[rank][0].name)
//       return <Home
//         key={ranks[rank].name}
//         name={ranks[rank].name} />
//     })
//   )
// }