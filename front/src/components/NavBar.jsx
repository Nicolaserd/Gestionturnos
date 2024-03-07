import React from 'react';
import logo from '../assets/CARDALAS-fotor-bg-remover-2024022616401.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/cuentas" className="nav-link">
            BANCA FUTURA
          </a>
        </li>
        <li className="nav-item">
          <a href="/personas" className="nav-link">
            PERSONAS
          </a>
        </li>
        <li className="nav-item">
          <a href="/empresas" className="nav-link">
            EMPRESAS
          </a>
        </li>
      </ul>
      <a href="/tarjeta-de-credito" className="navbar-link">
        Hazte cliente (Registro)
      </a>
    </nav>
  );
};

export default NavBar;