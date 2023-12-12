import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { formatPrice } from '../../utils/formatPrice';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardProductosStyles';

const CardProducto = ({ img, title, price, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <a href="" onClick={() =>
            dispatch(addToCart({ img, title, price, id }))
          }>Comprar</a>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
