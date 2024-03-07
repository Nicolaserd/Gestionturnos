import React from 'react';
import './NavBar.css';
import './CardAppointment.css';

const CardAppointment = ({turno:{date,time,status,user,id}}) => {
    
  return (
    <>
    
        <div className="div card__father">
          <div className="div card">
            <div className="card__front">
              <div className="body__card_front">
                <div className="bg"></div>
                <h1>CITA NÚMERO {id}</h1>
              </div>
            </div>
            <div className="card__back">
              <div className="body__card_back">
                <h1>Usuario : {user.name} </h1>
                <p>
                  Su cita  esta en estado {status} para el dia {date} a la hora {time}
                </p>
                <input type="button" value="Cancelar cita" />
              </div>
            </div>
          </div>
        </div>

     
    </>
  );
};

export default CardAppointment;