import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Content, ButtonsContainer, Button } from './CustomModalStyles';

const CheckoutConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <h2>¿Deseas confirmar la compra?</h2>
            <ButtonsContainer>
              <Button onClick={onConfirm}>Comprar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ButtonsContainer>
          </Content>
        </Overlay>
      )}
    </>
  );
};

CheckoutConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default CheckoutConfirmationModal;