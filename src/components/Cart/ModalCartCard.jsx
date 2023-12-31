import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/formatPrice';

import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

const ModalCartCard = ({ img, title, price, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainerStyled>
      <img src={img} alt={title} />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          onClick={() => dispatch(removeFromCart(id))}
        >
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase
          onClick={() =>
            dispatch(addToCart({ img, title, price, id }))
          }
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
