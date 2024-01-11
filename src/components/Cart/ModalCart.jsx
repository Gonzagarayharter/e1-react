import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MdOutlineClose } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { formatPrice } from "../../utils/formatPrice";

import Submit from "../UI/Submit/Submit";
import Increase from "../UI/Increase/Increase";
import ModalCartCard from "./ModalCartCard";

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";
import { ModalOverlayStyled } from "../Header/HeaderStyles";
import { clearCart, toggleHiddenCart } from "../../redux/cart/cartSlice";
import DeleteConfirmationModal from "../ModalDelete/DeleteConfirmationModal";
import ClearCartConfirmationModal from "../ModalDelete/ClearCartConfirmationModal";
import CheckoutConfirmationModal from "../ModalConfirmacion/CheckoutConfirmationModal";

const ModalCart = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isClearCartModalOpen, setIsClearCartModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(toggleHiddenCart());
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  // Eliminar item

  const handleDeleteCartItem = () => {
    dispatch(removeFromCart(selectedProductId));
    setIsDeleteModalOpen(false);
  };

  // Vaciar carrito
  const handleClearCartConfirmation = () => {
    setIsClearCartModalOpen(true);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setIsClearCartModalOpen(false);
  };

  // Realizar compra
  const handleCheckoutConfirmation = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    setIsCheckoutModalOpen(false);
  };

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}

      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ translateX: 600 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Resumen de compra</h1>
                <Increase
                  onClick={handleClearCartConfirmation}
                  disabled={!cartItems.length}
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p>Tu carrito esta vacio</p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio:</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  onClick={handleCheckoutConfirmation}
                  disabled={!cartItems.length}
                >
                  Realizar compra
                </Submit>

                <DeleteConfirmationModal
                  isOpen={isDeleteModalOpen}
                  onClose={() => setIsDeleteModalOpen(false)}
                  onConfirm={handleDeleteCartItem}
                  itemName={
                    selectedProductId
                      ? cartItems.find((item) => item.id === selectedProductId)
                          .title
                      : ""
                  }
                />

                <ClearCartConfirmationModal
                  isOpen={isClearCartModalOpen}
                  onClose={() => setIsClearCartModalOpen(false)}
                  onConfirm={handleClearCart}
                />

                <CheckoutConfirmationModal
                  isOpen={isCheckoutModalOpen}
                  onClose={() => setIsCheckoutModalOpen(false)}
                  onConfirm={handleCheckout}
                />
                
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
