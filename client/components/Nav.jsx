import React from 'react'
import ranks from '../data/ranks'

const Nav = props => {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {
          Object.keys(ranks).map((rank) => {
            return (
            // eslint-disable-next-line
            <li>{rank}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
// {Ranks.key}
// const navTemps = Ranks => {
//   return (
//     <div>
//       <h2>Nav</h2>
//       <div>
//         {
//           Ranks.map(nav => {
//             return <Nav
//               key={Object.keys()} />
//           })
//         }
//       </div>
//     </div>
//   )
// }

export default Nav
