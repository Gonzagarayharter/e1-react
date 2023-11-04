import React from 'react'
import { HeroDiv, HeroTextDiv } from './HeroStyles'

const Hero = () => {
  return (
    <HeroDiv>
        <HeroTextDiv>
            <h1>Innovate a la mayor confortabilidad.</h1>
            <p>Tu cambio comienza en este momento</p>
            <a href="#">Comprar</a>            
        </HeroTextDiv>
        <img src="https://northdeco.com/cdn/shop/products/1647_2048x.png?v=1686225060" alt="" />
    </HeroDiv>
  )
}

export default Hero