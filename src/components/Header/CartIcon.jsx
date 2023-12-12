import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { FiShoppingCart } from "react-icons/fi";
import { NavLinkStyled } from './HeaderStyles';

import { toggleHiddenCart } from '../../redux/cart/cartSlice'

const CartIcon = () => {
    const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
        (acc, item) => (acc += item.quantity),
        0
      );

    const dispatch = useDispatch();

  return (
    <>
    <NavLinkStyled onClick={() => dispatch(toggleHiddenCart())}>
        <FiShoppingCart />

      <span>{totalCartItems}</span>
    </NavLinkStyled>
        
    </>
  );
};

export default CartIcon;