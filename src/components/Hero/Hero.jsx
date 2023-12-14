import React from 'react'
import { BotonHomeATienda, HeroDiv, HeroTextDiv } from './HeroStyles'

const Hero = () => {
  return (
    <HeroDiv>
        <HeroTextDiv>
            <h1>Innovate a la mayor confortabilidad.</h1>
            <p>Tu cambio comienza en este momento</p>
            <BotonHomeATienda
            whileTap={{ scale: 0.95 }}
            to={"/tienda"}
            >Comprar</BotonHomeATienda>         
        </HeroTextDiv>
        <img src="https://northdeco.com/cdn/shop/products/1647_2048x.png?v=1686225060" alt="" />
    </HeroDiv>
  )
}

export default Hero