import React from 'react';
import './CardMembresia.css';

const CardMembresia = ({ titulo, descripcion }) => {
  return (
    <div className="card-membresia">
      <h5>{titulo}</h5>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardMembresia;
