import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Content, ButtonsContainer, Button } from './CustomModalStyles';

const CustomModal = ({ isOpen, onClose, onConfirm, product }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <h2>{`¿Estás seguro de que deseas agregar ${product.title} por $${product.price}?`}</h2>
            <ButtonsContainer>
              <Button onClick={onConfirm}>Agregar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ButtonsContainer>
          </Content>
        </Overlay>
      )}
    </>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default CustomModal;