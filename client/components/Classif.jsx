import React from 'react'
import ranks from '../../data/ranks'
import {Link} from 'react-router-dom'

const Classif = (props) => {

  const rank = props.match.params.rank
    console.log(props)
  return (
    <div>
      <h2>{rank}</h2>
      <div>
        {ranks.rank.map(classif => {
          return (
        //     <div key ='classif'>
        //       <li><Link to={`/list/${rank}/${classif}`}>{ranks.rank.classif}</Link></li>
        //     </div>
        //   )
        // })
        }
      </div>

    </div>
  )
}

export default Classif
