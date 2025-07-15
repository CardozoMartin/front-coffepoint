import React from 'react'
import { useAuthSessionStore } from '../store/authSessionStore';
import { Navigate, Outlet } from 'react-router-dom';

const RutasPrivadas = () => {
    const { user } = useAuthSessionStore();
  return (
   user?.rol === 'cliente' ? <Outlet /> : <Navigate to="/login" replace />
  )
}

export default RutasPrivadas