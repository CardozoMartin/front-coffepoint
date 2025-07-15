import React from 'react';
import Header from '../components/Header/Header';
import BarraPuntos from '../components/Puntos/BarraPuntos';
import Carrousel from '../components/Carrousel/Carrousel';
import CardPromocion from '../components/Cards/CardPromocion/CardPromocion';
import { PromocionesData } from '../data/PromocionesData';
import NavBar from '../components/Navbar/NavBar';

const HomePage = () => {
  return (
    <div style={{ paddingBottom: '90px' }}> {/* Espacio para el NavBar */}
      <Header />
      <BarraPuntos puntosActuales={2} puntosMaximos={5} />
      <Carrousel />

      <div className="px-3 mt-3">
        <h5 className="mb-2 fw-bold">Promociones</h5>
        <div className="d-flex overflow-auto">
          {PromocionesData.map((promo) => (
            <CardPromocion
              key={promo.id}
              imagen={promo.imagen}
              titulo={promo.titulo}
            />
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default HomePage;
