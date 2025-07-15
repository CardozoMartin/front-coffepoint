import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import SucursalPage from './pages/SucursalPage'
import MembresiaPage from './pages/MembresiaPage'
import PerfilPage from './pages/PerfilPage'
import SucursalDetailPage from './pages/SucursalDetailPage'
import RutasPrivadas from './Rutas/RutasPrivadas'
import RutasPublicas from './Rutas/RutasPublicas'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Define las rutas públicas */}
        <Route element={<RutasPublicas />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Route>

        {          /* Define las rutas privadas */}
        <Route element={<RutasPrivadas />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/membresia" element={<MembresiaPage />} />
          <Route path="/sucursal" element={<SucursalPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/sucursal/:id" element={<SucursalDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
