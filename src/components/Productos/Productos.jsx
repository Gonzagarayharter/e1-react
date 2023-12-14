import React from 'react'
import { BotonATienda, ProductoDiv, ProductoDivContainer, ProductosDiv } from './ProductosStyles'
const Productos = () => {

  return (
    <ProductosDiv>
        <h1>Productos Destacados</h1>
        <ProductoDivContainer>
            <ProductoDiv>
                <img src="https://tiendaliving.com.ar/cdn/shop/products/CaptureOneSession60831_800x.jpg?v=1593296131" alt="" />
                <h2>Sofá Valencia</h2>
                <p>$680.000</p>
                <BotonATienda 
                to={"/tienda"}
                whileTap={{ scale: 0.95 }}
                >Comprar</BotonATienda>
            </ProductoDiv>
            <ProductoDiv>
                <img src="https://http2.mlstatic.com/D_NQ_NP_737861-MLA72303657703_102023-O.webp" alt="" />
                <h2>Cajonera moderna minimalista Belice</h2>
                <p>$95.000</p>
                <BotonATienda 
                to={"/tienda"}
                whileTap={{ scale: 0.95 }}
                >Comprar</BotonATienda>
            </ProductoDiv>
            <ProductoDiv>
                <img src="https://tiendaliving.com.ar/cdn/shop/files/GREEK_800x.png?v=1693499018" alt="" />
                <h2>Mesa comedor Singapur</h2>
                <p>$685.000</p>
                <BotonATienda 
                to={"/tienda"}
                whileTap={{ scale: 0.95 }}
                >Comprar</BotonATienda>
            </ProductoDiv>
        </ProductoDivContainer>
    </ProductosDiv>
  )
}

export default Productos