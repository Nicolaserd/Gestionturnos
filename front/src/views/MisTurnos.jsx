import NavBar from "../components/NavBar.jsx"
import appointments from "../helpers/myTurns.js"
import React, { useState,useEffect } from 'react';
import CardAppointment from "../components/CardAppointment.jsx";
import "./MisTurnos.css"
import axios from 'axios';

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(appointments);
    useEffect(()=>{
        axios.get('http://localhost:3000/appointments').then((res)=>setTurnos(res.data));
    },[])
    

    return (
        <>
            <NavBar/>
            <section>
                <div className="container__card">
                    {turnos.map((turno) => {
                        return <CardAppointment key={turno.id} turno={turno}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default MisTurnos;