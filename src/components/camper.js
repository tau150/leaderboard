import React from 'react';


const Camper = (props) => {
  return(
    <tr key={props.username}>
      <th scope="row">{ props.counter }</th>
      <td > <img src={props.img} className='img-fluid img-perfil' alt=""/> {props.username}</td>
      <td className='text-center'>{props.recent}</td>
      <td className='text-center'>{props.alltime}</td>
    </tr>
  )
}
export default Camper
