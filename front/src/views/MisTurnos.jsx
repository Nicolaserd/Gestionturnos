import NavBar from "../components/NavBar.jsx"
import appointments from "../helpers/myTurns.js"
import React, { useState } from 'react';
import CardAppointment from "../components/CardAppointment.jsx";
import "./MisTurnos.css"

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(appointments);

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