import React from 'react';
import logo from '../assets/CARDALAS-fotor-bg-remover-2024022616401.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            BANCA FUTURA
          </NavLink>
        </li>
        <li className="nav-item">

          <NavLink to="/LoginForm" className="nav-link">
           PERSONAS
          </NavLink>
         
        </li>
        <li className="nav-item">
       
        <NavLink to="/MisTurnos" className="nav-link">
         TURNOS
        </NavLink>
         
        </li>
      </ul>
    
      <NavLink to="/RegistrationForm" className="nav-link">
        Hazte cliente (Registro)
      </NavLink>
     
    </nav>
  );
};

export default NavBar;