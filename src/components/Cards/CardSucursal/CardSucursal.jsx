import React from 'react';
import './CardSucursal.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // 👈 Import necesario

const CardSucursal = ({ id, titulo, direccion, direccionExtra, descripcion, color, imagen, puntuacion }) => {
  return (
    <Link to={`/sucursal/${id}`} className="text-decoration-none text-dark"> {/* 👈 Enlace dinámico */}
      <div className="card-sucursal shadow-sm">
        <div className="card-sucursal-img" style={{ backgroundColor: color }}>
          {imagen && <img src={imagen} alt={titulo} />}
        </div>
        <div className="card-sucursal-body">
          <div className="card-sucursal-header">
            <strong>{titulo.toUpperCase()}</strong>
            {puntuacion && (
              <span className="card-sucursal-rating">
                {puntuacion} <FaStar className="text-warning" />
              </span>
            )}
          </div>
          <div className="card-sucursal-direccion">
            <p><FaMapMarkerAlt /> {direccion}</p>
            {direccionExtra && <p><FaMapMarkerAlt /> {direccionExtra}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSucursal;
