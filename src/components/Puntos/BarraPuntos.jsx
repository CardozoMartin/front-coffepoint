import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { PiCoffeeFill } from 'react-icons/pi';
import { CiCoffeeCup } from "react-icons/ci";
import './BarraPuntos.css';

const BarraPuntos = ({ puntosActuales = 2, puntosNecesarios = 5 }) => {
  const porcentaje = (puntosActuales / puntosNecesarios) * 100;

  return (
    <div className="contenedor-barra-puntos">
      <div className="barra-titulo">Mis puntos</div>
      <div className="barra-contenido">
        <div className="barra-info">
          <span className="barra-fraccion">
            <strong>{puntosActuales}</strong>/<span className="barra-total">{puntosNecesarios}</span>
          </span>

          <div className="barra-progreso-wrapper">
            <ProgressBar
              now={porcentaje}
              className="barra-progreso"
              variant="custom"
            />
          </div>
        </div>

        <div className="barra-recompensa">
            <CiCoffeeCup size={24} />
          <span className="barra-texto-recompensa">
            Free<br />Coffee
         </span>
        </div>
      </div>
    </div>
  );
};

export default BarraPuntos;
