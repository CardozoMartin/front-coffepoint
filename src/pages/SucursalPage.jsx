import React from 'react'
import NavBar from "../components/Navbar/NavBar"
import Header from "../components/Header/Header"
import CardSucursal from '../components/Cards/CardSucursal/CardSucursal'
import { SucursalData } from '../data/SucursalesData'
const MembresiaPage = () => {
  return (<>
  <Header/>
  <div style={{ paddingBottom: '90px' }}>
   <div className="p-3">
      <h4 className="fw-bold mb-3">Sucursales</h4>
      {SucursalData.map((sucursal) => (
  <CardSucursal
  key={sucursal.id}
  id={sucursal.id} // ✅ Esto es lo que falta
  titulo={sucursal.titulo}
  direccion={sucursal.direccion}
  direccionExtra={sucursal.direccionExtra}
  descripcion={sucursal.descripcion}
  color={sucursal.color}
  imagen={sucursal.imagen}
  puntuacion={sucursal.puntuacion}
/>
))}
    </div>
  < NavBar/>
  </div>
  </>
    
  )
}

export default MembresiaPage