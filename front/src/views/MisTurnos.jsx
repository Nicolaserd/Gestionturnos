import NavBar from "../components/NavBar.jsx"
import appointments from "../helpers/myTurns.js"
import React, { useState,useEffect } from 'react';
import CardAppointment from "../components/CardAppointment.jsx";
import "./MisTurnos.css"
import axios from 'axios';

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(appointments);
    const [tituloCitas,setTituloCitas] = useState("MIS CITAS");
    useEffect(()=>{
        axios.get('http://localhost:3000/appointments').then((res)=>setTurnos(res.data));
    },[])

    const handleCancelarCita = (id) => {
        
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(response => {
          alert(
            `cita con id ${id} : ${response.data.Message}
             
            `)
            window.location.reload();
        })
        .catch(error => {
          alert(
            `cita con id ${id} : no se cancelo ${error.status}
             
            `)
            window.location.reload();
        });

        
        
      };
   

    return (
        <>
            <NavBar/>

            <div className="container_h1_logo">

            <div className="container_logo">
                <div className="logo_h1"></div>
                <div className="bottom_part"></div>
            </div>

            <h1 className="misTurnosTitulo">{tituloCitas}</h1>
            
            </div>

            <section>
                <div className="container__card">
                    {turnos.map((turno) => {
                        return <CardAppointment key={turno.id} turno={turno} onCancelarCita={handleCancelarCita}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default MisTurnos;