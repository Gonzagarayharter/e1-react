import React from 'react'
import { ProductoDiv, ProductoDivContainer, ProductosDiv } from './ProductosStyles'

const Productos = () => {
  return (
    <ProductosDiv>
        <h1>Productos Destacados</h1>
        <ProductoDivContainer>
            <ProductoDiv>
                <img src="https://kandelsdeco.com/wp-content/uploads/2020/03/napoleon-22png.png" alt="" />
                <h2>Sofá Nápoles</h2>
                <p>$120.000</p>
                <a href="">Comprar</a>
            </ProductoDiv>
            <ProductoDiv>
                <img src="https://authogar.vtexassets.com/arquivos/ids/183066-800-auto?v=637982917707200000&width=800&height=auto&aspect=true" alt="" />
                <h2>Placard Venecia</h2>
                <p>$220.000</p>
                <a href="">Comprar</a>
            </ProductoDiv>
            <ProductoDiv>
                <img src="https://livingstyle.com.ar/image/cache/catalog/productos/Orlandi/Cocina%20Compacta/cocina-calida-linosa-750x930.png" alt="" />
                <h2>Mueble de cocina París</h2>
                <p>$500.000</p>
                <a href="">Comprar</a>
            </ProductoDiv>
        </ProductoDivContainer>
    </ProductosDiv>
  )
}

export default Productos