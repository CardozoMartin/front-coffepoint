import React from 'react';
import '../css/login.css' 
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="••••••••"
                    style={{ paddingRight: '2.5rem' }}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                  >
                    <i className="bi bi-eye"></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-coffee"
              >
                Iniciar Sesión
              </button>
            </form>

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