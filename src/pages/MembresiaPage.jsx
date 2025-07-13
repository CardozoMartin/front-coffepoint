import React from 'react';
import Header from '../components/Header/Header';
import CardMembresia from '../components/Cards/CardMembresia/CardMembresia';
import { MembresiasData } from '../data/MembresiaData';
import NavBar from '../components/Navbar/NavBar';

const MembresiaPage = () => {
  return (
    <>
      <Header />
      <div className="px-3 mt-3">
        <h5 className="fw-bold mb-3 text-center">Elegí tu Membresía</h5>
        {MembresiasData.map((membresia) => (
          <CardMembresia key={membresia.id} {...membresia} />
        ))}
      </div>
      <NavBar />
    </>
  );
};

export default MembresiaPage;
