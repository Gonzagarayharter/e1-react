import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductoDiv, ProductoDivContainer, ProductosDivStyled } from './TiendaStyles'
import { BotonATienda } from './ProductosStyles';
import { formatPrice } from '../../utils/formatPrice';
import { addToCart } from '../../redux/cart/cartSlice';
import Categorias from '../Categorias/Categorias';
import { Products, products } from '../../data/Products';
import CustomModal from '../ModalConfirmacion/CustomModal';

const Tienda = () => {
  const [currentCategory, setCurrentCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const changeCategory = (category) => {
    setCurrentCategory(category);
  };

  const filteredProducts = currentCategory === 'Todos' ? products : Products[currentCategory];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuy = () => {
    dispatch(
      addToCart({
        img: selectedProduct.img,
        title: selectedProduct.title,
        price: selectedProduct.price,
        id: selectedProduct.id,
      })
    );
    closeModal();
  };

  return (
    <>
      <ProductosDivStyled>
        <Categorias changeCategory={changeCategory} />
        <h1>{currentCategory}</h1>
        <ProductoDivContainer>
          {filteredProducts.map((product) => (
            <ProductoDiv key={product.id}>
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{formatPrice(product.price)}</p>
              <BotonATienda 
                onClick={() => openModal(product)}
                to={"/tienda"}
                whileTap={{ scale: 0.95 }}
                >Comprar</BotonATienda>
            </ProductoDiv>
          ))}
        </ProductoDivContainer>
      </ProductosDivStyled>

      <CustomModal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleBuy} product={selectedProduct} />
    </>
  );
};

export default Tienda;




// import React, { useState } from 'react'
// import { ProductoDiv, ProductoDivContainer, ProductosDiv, ProductosDivStyled } from './TiendaStyles'
// import { useDispatch } from 'react-redux';
// import { formatPrice } from '../../utils/formatPrice';
// import { Products, products } from '../../data/Products';
// import { addToCart } from '../../redux/cart/cartSlice';
// import Categorias from '../Categorias/Categorias';

// const Tienda = () => {
//     const [currentCategory, setCurrentCategory] = useState('Todos');
//     const dispatch = useDispatch();
//     const [showModal, setShowModal] = useState(false);

//     const changeCategory = (category) => {
//       setCurrentCategory(category);
//     };

//     const filteredProducts = currentCategory === 'Todos' ? products : Products[currentCategory];

//     const confirmAdd = () => {
//       setShowModal(true)
//     }

//   return (
//     <>
//       <ProductosDivStyled>
//       <Categorias changeCategory={changeCategory}/>
//         <h1>{currentCategory}</h1>
//         <ProductoDivContainer>
//           {filteredProducts.map((product) => (
//             <ProductoDiv key={product.id}>
//               <img src={product.img} alt={product.title} />
//               <h2>{product.title}</h2>
//               <p>{formatPrice(product.price)}</p>
//               <a
//                 href=""
//                 onClick={() =>
//                   dispatch(addToCart({ img: product.img, title: product.title, price: product.price, id: product.id }))  
//                 }
//               >
//                 Comprar
//               </a>
//             </ProductoDiv>
//           ))}
//         </ProductoDivContainer>
//       </ProductosDivStyled>
//     </>
//   <>
//     <ProductosDivStyled>
//         <h1>Sofás & Sillones</h1>
//         <ProductoDivContainer>
//             <ProductoDiv>
//                 <img src={products.img} alt={products.title} />
//                 <h2>{products.title}</h2>
//                 <p>{formatPrice(products.price)}</p>
//                 <a href="" onClick={() =>
//             dispatch(addToCart({ img, title, price, id }))
//           }>Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/products/LOOK4_800x.jpg?v=1657038597" alt="" />
//                 <h2>Sofá Tokio</h2>
//                 <p>$520.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/files/SHIV_800x.png?v=1693591259" alt="" />
//                 <h2>Sillón Turín</h2>
//                 <p>$240.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/products/CaptureOneSession60831_800x.jpg?v=1593296131" alt="" />
//                 <h2>Sofá Valencia</h2>
//                 <p>$680.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/products/CaptureOneSession6396_800x.jpg?v=1594485483" alt="" />
//                 <h2>Sillón Carmelo</h2>
//                 <p>$300.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://kandelsdeco.com/wp-content/uploads/2020/03/napoleon-22png.png" alt="" />
//                 <h2>Sofá Nápoles</h2>
//                 <p>$420.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//         </ProductoDivContainer>
//     </ProductosDivStyled>

//     <ProductosDiv>
//         <h1>Muebles de guardado</h1>
//         <ProductoDivContainer>
//             <ProductoDiv>
//                 <img src="https://http2.mlstatic.com/D_NQ_NP_959487-MLU71573357800_092023-O.webp" alt="" />
//                 <h2>Bahiut Oslo</h2>
//                 <p>$115.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://http2.mlstatic.com/D_NQ_NP_903445-MLA71788379271_092023-O.webp" alt="" />
//                 <h2>Bahiut modular Angra</h2>
//                 <p>$150.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://http2.mlstatic.com/D_NQ_NP_737861-MLA72303657703_102023-O.webp" alt="" />
//                 <h2>Cajonera moderna minimalista Belice</h2>
//                 <p>$95.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://http2.mlstatic.com/D_NQ_NP_788993-MLU72609050585_112023-O.webp" alt="" />
//                 <h2>Modular Sidney</h2>
//                 <p>$270.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://authogar.vtexassets.com/arquivos/ids/183066-800-auto?v=637982917707200000&width=800&height=auto&aspect=true" alt="" />
//                 <h2>Placard Venecia</h2>
//                 <p>$220.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://livingstyle.com.ar/image/cache/catalog/productos/Orlandi/Cocina%20Compacta/cocina-calida-linosa-750x930.png" alt="" />
//                 <h2>Mueble de cocina París</h2>
//                 <p>$500.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//         </ProductoDivContainer>
//     </ProductosDiv>

//     <ProductosDiv>
//         <h1>Comedor</h1>
//         <ProductoDivContainer>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/files/GREEK_800x.png?v=1693499018" alt="" />
//                 <h2>Mesa comedor Singapur</h2>
//                 <p>$685.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/files/SKORP2_800x.png?v=1693498915" alt="" />
//                 <h2>Mesa comedor Italia</h2>
//                 <p>$750.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//             <ProductoDiv>
//                 <img src="https://tiendaliving.com.ar/cdn/shop/files/FILA_800x.png?v=1693498760" alt="" />
//                 <h2>Juego mesa y sillas Barcelona</h2>
//                 <p>$1.200.000</p>
//                 <a href="">Comprar</a>
//             </ProductoDiv>
//         </ProductoDivContainer>
//     </ProductosDiv>
//     </>
//   )
// }

// export default Tienda