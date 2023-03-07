import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Form = () => {
  
    const [user,setUser] = useState({
        nombre: '',
        apellido: '',
        poder: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.apellido.length > 6 && user.nombre.startsWith(" ") == false) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

    return (
  
    <div>
        <form onSubmit={handleSubmit}>

        <label > Nombre </label>
        <input type="text" value={user.nombre} onChange={(e) => setUser({...user,nombre: e.target.value})}/>
        <label > Apellido </label>
        <input type="text"value={user.apellido} onChange={(e) => setUser({...user, apellido: e.target.value})} />
        <label > Super poder</label>
        <input type="text" value={user.poder} onChange={(e) => setUser({...user, poder: e.target.value})} />

        <button>Enviar</button>

        {err && "Por favor chequea que la información sea correcta"}

        </form>

        {show  && <Card nombre={user.nombre} apellido={user.apellido} poder={user.poder}/>}

    </div>


  )
}

export default Form