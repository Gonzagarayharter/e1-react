import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Content, ButtonsContainer, Button } from '../ModalConfirmacion/CustomModalStyles';

const ClearCartConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <h2>{`¿Estás seguro de que deseas vaciar el carrito?`}</h2>
            <ButtonsContainer>
              <Button onClick={onConfirm}>Vaciar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ButtonsContainer>
          </Content>
        </Overlay>
      )}
    </>
  );
};

ClearCartConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ClearCartConfirmationModal;