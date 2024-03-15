import React, { useState } from 'react';
import './NavBar.css';
import './CardAppointment.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CardAppointment = ({turno:{date,time,status,user,id},onCancelarCita}) => {
   
   const handleClick = ()=>{

    onCancelarCita(id);
    
  };
  const name = useSelector(state=> state.user.user.user.name)
  
  return (
    <>
       
        <div className="div card__father">
          <div className="div card">
            <div className="card__front" style={status === "active" ? { boxShadow: "0.0625rem 0.0625rem 1.875rem -0.3125rem #2fff00" } : {  boxShadow: "0.0625rem 0.0625rem 1.875rem -0.3125rem #ff000e"  }}>
              <div className="body__card_front">
                <div className="bg"></div>
                <h1 style={status === "active" ? { color: "#2fff00" } : { color: "#ff000e" }}>CITA  {date}</h1>
              </div>
            </div>
            <div className="card__back" style={status === "active" ? { boxShadow: "0.0625rem 0.0625rem 1.875rem -0.3125rem #2fff00" } : {  boxShadow: "0.0625rem 0.0625rem 1.875rem -0.3125rem #ff000e"  }}>
              <div className="body__card_back">
                <h1>Usuario : {name} </h1>
                <p>
                  Su cita  esta en estado   <span style={status === "active" ? { color: "green" } : { color: "red" }}>{status === "active" ? "activa" : "cancelada"} </span> para el dia {date} a la hora {time}
                </p>
                <input type="button"   onClick={handleClick} value="Cancelar cita" />
              </div>
            </div>
          </div>
        </div>

     
    </>
  );
};

export default CardAppointment;