import NavBar from "../components/NavBar.jsx"
import appointments from "../helpers/myTurns.js"
import React, { useState } from 'react';
import CardAppointment from "../components/CardAppointment.jsx";

const MisTurnos = () =>{
    const [turnos, setTurnos] = useState(appointments);
    return(
        <>
            <NavBar/>

           <div>
                <h1>Mis Turnos</h1>
                <div>
                    {turnos.map((turno) => {
                        return  <CardAppointment key={turno.id} turno={turno}/>
                    }
                    )}
                    
                </div>
            </div>

        </>
    )
}

export default MisTurnos