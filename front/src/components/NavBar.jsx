import React from 'react';
import logo from '../assets/CARDALAS-fotor-bg-remover-2024022616401.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser,logOutUserAppointments } from '../../redux/reducer';

const NavBar = () => {
  const login = useSelector(state=> state.user.user.login)
 
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutUser())
    dispatch(logOutUserAppointments())
  
  };
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            BANCA FUTURA
          </NavLink>
        </li>
        <li className="nav-item">

         {
          login!==true?
          <NavLink to="/LoginForm" className="nav-link">
           PERSONAS
          </NavLink>:true
          }
         
        </li>
        <li className="nav-item">
       
        
          {
            login===true?
            <NavLink to="/MisTurnos" className="nav-link">
               CITAS
            </NavLink>:null
          }
        
         
        </li>
        <li className="nav-item">
       
        
          {
            login===true?
            <NavLink to="/AgendarCita" className="nav-link">
               AGENDAR CITA
            </NavLink>:null
          }
        
         
        </li>
      </ul>
    
      {
        login===true?
        <NavLink to="/" className="nav-link" onClick={handleLogout}>
         LOG OUT
        </NavLink>:<NavLink to="/RegistrationForm" className="nav-link">
          Hazte cliente (Registro)
        </NavLink>
      }
     
    </nav>
  );
};

export default NavBar;