import React from 'react'
import { NosotrosDiv, NosotrosTextDiv } from './NosotrosStyles'

const Nosotros = () => {
  return (
    <NosotrosDiv>
        <NosotrosTextDiv>
            <h1>Nosotros</h1>
            <p>Somos <span>Integral Deco</span> una empresa dedicada al diseño y confort para tu hogar. Nos especializamos en la creación de sillones y muebles para transformar tus espacios y reflejar tu estilo distintivo.</p>
        </NosotrosTextDiv>
        <img src="https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </NosotrosDiv>
  )
}

export default Nosotros