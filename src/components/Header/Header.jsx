import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LogoCoffe from "../../assets/img/Logos/LogoCoffe.png"
import { FaBars } from 'react-icons/fa';
import GranoPuntos from '../utils/GranoPunto'; // 
import './Header.css';
import { useAuthSessionStore } from '../../store/authSessionStore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Header = () => {



  const { user,logout } = useAuthSessionStore();
  const navigate = useNavigate()

  const handleLogout = () =>{
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate('/login'); // Redirigir a la página de inicio de sesión
      }
    });
  }
  return (
    <header className="bg-light px-3 py-2 border-bottom shadow-sm">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <h5>Hola {user?.nombre} </h5>
          <button className="btn btn-outline-secondary" onClick={handleLogout}>
            Cerrar sesión
          </button>
          <Col xs="auto">
            {/* Botón hamburguesa */}
            <Button variant="link" className="text-dark p-0">
              <FaBars size={24} />
            </Button>
          </Col>

          <Col className="text-center">
            {/* Logo central */}
           <img
            src={LogoCoffe}
            alt="Logo"
            style={{ height: '40px' }} // ← Ajustá este valor según el tamaño deseado
          />
          </Col>

          <Col xs="auto" className="d-flex align-items-center">
            {/* Contador de puntos tipo grano */}
            <GranoPuntos puntos={2} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
