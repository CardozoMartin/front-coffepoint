import React, { useState } from 'react';
import './CardPromocion.css';
import ModalPromocion from './ModalPromocion';

const CardPromocion = ({ imagen, titulo }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="promo-card" onClick={() => setShowModal(true)}>
        <img src={imagen} alt={titulo} />
      </div>

      <ModalPromocion
        show={showModal}
        onHide={() => setShowModal(false)}
        imagen={imagen}
        titulo={titulo}
      />
    </>
  );
};

export default CardPromocion;
