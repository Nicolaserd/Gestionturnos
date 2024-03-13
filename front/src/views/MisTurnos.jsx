import NavBar from "../components/NavBar.jsx"
// import appointments from "../helpers/myTurns.js"
import React, { useState,useEffect } from 'react';
import CardAppointment from "../components/CardAppointment.jsx";
import "./MisTurnos.css"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addUserAppointments } from "../../redux/reducer.js";

const MisTurnos = () => {
    // const [turnos, setTurnos] = useState({});
    const actualUserId = useSelector(state=> state.user.user?.user.id)
  
   
    const dispatch = useDispatch();
    
    const [tituloCitas,setTituloCitas] = useState("MIS CITAS");
    useEffect(()=>{
        console.log(actualUserId)
        axios.get(`http://localhost:3000/users/${actualUserId}`).then((res)=>dispatch(addUserAppointments(res.data.appointment))).then(res=>console.log(res));
        
    },[])

    const handleCancelarCita = (id) => {
        
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        .then(response => {
          alert(
            `cita con id ${id} : ${response.data.Message}
             
            `)
            axios.get(`http://localhost:3000/users/${actualUserId}`).then((res)=>dispatch(addUserAppointments(res.data.appointment)));
        })
        .catch(error => {
          alert(
            `cita con id ${id} : no se cancelo ${error.status}
             
            `)
           
        });

        
        
      };
      
      const turnos = useSelector(state => state.userAppointments?.userAppointments?.appointments);
      console.log(turnos);
      const nameUser = useSelector(state=> state.user.user.user.name)

    return (
        <>
            
           
            <div className="container_h1_logo">

            <div className="container_logo">
                <div className="logo_h1"></div>
                <div className="bottom_part"></div>
            </div>

            <h1 className="misTurnosTitulo">{tituloCitas}</h1>
            
            </div>
            {turnos.length===0?
            <h1>Aún no hay turnos agendados para {nameUser}</h1>:null}
            <section>
                <div className="container__card">
                    {turnos?.map((turno) => {
                        return <CardAppointment key={turno.id} turno={turno} onCancelarCita={handleCancelarCita}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default MisTurnos;