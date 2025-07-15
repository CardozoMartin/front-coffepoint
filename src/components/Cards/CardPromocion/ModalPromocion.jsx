import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalPromocion.css';

const ModalPromocion = ({ show, onHide, imagen, titulo }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Body className="modal-promocion-body text-center">
        <img src={imagen} alt="Promo" className="promo-img-full" />
        <h5 className="promo-titulo mt-3">{titulo}</h5>

        <Button variant="dark" className="mt-3 w-100">
          Obtener cupón
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ModalPromocion;
