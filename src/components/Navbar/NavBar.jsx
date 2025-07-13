import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { PiQrCode } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar-bottom">
      <div className="navbar-inner d-flex justify-content-around align-items-center">
        <NavLink to="/" className="icono" end>
          <IoHomeOutline size={26} />
        </NavLink>
        <NavLink to="/membresia" className="icono">
          <PiQrCode size={28} />
        </NavLink>
        <NavLink to="/sucursal" className="icono">
          <CiCoffeeCup size={28} />
        </NavLink>
        <NavLink to="/perfil" className="icono">
          <FaRegCircleUser size={26} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
