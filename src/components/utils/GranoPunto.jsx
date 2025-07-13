import React from 'react';
import '../../css/GranoPuntos.css'; 
import { BiSolidCoffeeBean } from "react-icons/bi";

const GranoPuntos = ({ puntos = 2 }) => {
  return (
    <div className="grano-puntos">
      <BiSolidCoffeeBean color="white" size={18} className="me-1" />


      <span className="grano-numero">{puntos}</span>
    </div>
  );
};

export default GranoPuntos;
