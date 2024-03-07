import React from 'react';
import './NavBar.css';

const CardAppointment = ({turno:{date,time,status,userId}}) => {
    
  return (
    <>
    <div>
        <h1>FECHA: {date}</h1>
        <h1>HORA: {time}</h1>
        <h1>ESTADO: {status} </h1>
        <h1>USUARIO: {userId}</h1>
    </div>
    </>
  );
};

export default CardAppointment;