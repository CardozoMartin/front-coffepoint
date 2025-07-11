import React from 'react';
import '../css/register.css'
import { Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import FormRegister from '../components/Register/FormRegister';

const RegisterPage = ({ onSwitchToLogin }) => {
    return (
        <>
            <div className="register-container d-flex align-items-center justify-content-center">
                <div className="w-100">
                    <div className="register-card">
                        {/* Logo y título */}
                        <div className="text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <i className="bi bi-cup-hot coffee-logo"></i>
                                <div className='d-flex align-items-center '>
                                    <Coffee className='icon-coffe'></Coffee>
                                    <h1 className="brand-title ms-2">COFFEEPOINT</h1>
                                </div>
                            </div>
                            <p className="subtitle mb-0">Únete a nuestra comunidad cafetera</p>
                        </div>

                        {/* Formulario */}
                        <FormRegister></FormRegister>

                        {/* Switch to login */}
                        <div className="text-center mt-4">
                            <p className="text-coffee-medium mb-0">
                                ¿Ya tienes cuenta?{' '}
                                <Link to={'/login'}
                                    type="button"
                                    className="btn btn-link p-0 login-link"
                                    onClick={onSwitchToLogin}
                                >
                                    Inicia sesión aquí
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;