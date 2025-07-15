import React from 'react';
import '../css/login.css' 
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

const LoginPage = ({ onSwitchToRegister }) => {
  return (
    <>
      <div className="login-container d-flex align-items-center justify-content-center">
        <div className="w-100">
          <div className="login-card">
            {/* Logo y título */}
            <div className="text-center mb-4">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <i className="bi bi-cup-hot coffee-logo"></i>
                <div className='d-flex align-items-center '>
                  <Coffee className='icon-coffe'></Coffee>
                  <h1 className="brand-title ms-2">COFFEEPOINT</h1>
                </div>
              </div>
              <p className="subtitle mb-0">Inicia sesión para continuar</p>
            </div>

            {/* Formulario */}
            <LoginForm />

            {/* Switch to register */}
            <div className="text-center mt-4">
              <p className="text-coffee-medium mb-0">
                ¿No tienes cuenta?{' '}
                <Link to={'/register'}
                  type="button"
                  className="btn btn-link p-0 register-link"
                  onClick={onSwitchToRegister}
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;