import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SucursalData } from '../data/SucursalesData';
import { PromocionesData } from '../data/PromocionesData';
import Header from '../components/Header/Header';
import NavBar from '../components/Navbar/NavBar';
import CardPromocion from '../components/Cards/CardPromocion/CardPromocion';
import "../css/SucursalDetailPage.css"

const SucursalDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const sucursal = SucursalData.find((s) => s.id === parseInt(id));

  const promocionesSucursal = PromocionesData.filter(
    (promo) => promo.sucursalId === sucursal?.id
  );

  if (!sucursal) {
    return <p className="text-center mt-5">Sucursal no encontrada</p>;
  }

  return (
    <>
      <Header />
      <div className="mt-2" style={{ paddingBottom: '90px' }}>
        {/* Imagen principal */}
     <div style={{ backgroundColor: '#ddd', height: '140px' }}>
  {sucursal.imagen && (
    <img
      src={sucursal.imagen}
      alt={sucursal.titulo}
      className="sucursal-imagen"
    />
  )}
</div>

        {/* Info principal */}
            <div className="d-flex justify-content-between align-items-center px-3 mt-2">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">{sucursal.titulo}</h5>
          {sucursal.logo && (
            <img
              src={sucursal.logo}
              alt={sucursal.titulo}
              className="logo-sucursal"
            />
          )}
        </div>
        <button className="btn btn-sm btn-outline-success">
          <i className="bi bi-info-circle"></i> Info
        </button>
      </div>
      <small className="text-success px-1.5">Abierto: {sucursal.horario || 'Consultar horarios'}</small>


        {/* Promociones */}
        {promocionesSucursal.length > 0 && (
          <div className="px-3 mt-4">
            <h6 className="fw-bold mb-2">Tremendas Promociones</h6>
            <div className="row g-3">
              {promocionesSucursal.map((promo) => (
                <div className="col-6" key={promo.id}>
                  <CardPromocion titulo={promo.titulo} imagen={promo.imagen} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

  
      
       

      <NavBar />
    </>
  );
};

export default SucursalDetailPage;
