import React from 'react'
import { useAuthSessionStore } from '../store/authSessionStore';
import { Navigate, Outlet } from 'react-router-dom';

const RutasPublicas = () => {
    const { user } = useAuthSessionStore();
  return (
    user?.rol === 'cliente' ? <Navigate to="/" replace /> : <Outlet />
  )
}

export default RutasPublicas