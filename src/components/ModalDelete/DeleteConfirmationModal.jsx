import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, Content, ButtonsContainer, Button } from '../ModalConfirmacion/CustomModalStyles';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  return (
    <>
      {isOpen && (
        <Overlay>
          <Content>
            <h2>{`¿Estás seguro de que deseas eliminar ${itemName}?`}</h2>
            <ButtonsContainer>
              <Button onClick={onConfirm}>Eliminar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ButtonsContainer>
          </Content>
        </Overlay>
      )}
    </>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default DeleteConfirmationModal;