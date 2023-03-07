import React from 'react'

const Card = ({nombre,apellido, poder}) => {
  return (
    <div>
        <h3>Estimado/a {apellido} {nombre}, su super poder elegido es {poder}.</h3>
    </div>
  )
}

export default Card