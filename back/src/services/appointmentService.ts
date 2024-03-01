import IAppointment from"../interfaces/IAppointment";
import {getUserByIdService} from "./userServices";

const appointments: IAppointment[] = [
    {
        id: 1,
        date: "2024-03-01",
        time: "09:00:00",
        userId: 1,
        status: "active"
    },
    {
        id: 2,
        date: "2024-03-02",
        time: "10:30:00",
        userId: 2,
        status: "active"
    },
    {
        id: 3,
        date: "2024-03-03",
        time: "11:45:00",
        userId: 3,
        status: "cancelled"
    },
    {
        id: 4,
        date: "2024-03-04",
        time: "13:15:00",
        userId: 4,
        status: "active"
    }
    
];

function getAppointmentsService(): IAppointment[] {
    return appointments;
}
function getAppointmentsServiceById(id:number): IAppointment {

    const appointment = appointments.find(appointment => appointment.id === id);

    if (!appointment) {
        throw new Error("Turno no encontrado");
    }

    return appointment;
}

function createAppointmentsService(date: string, time: string, userId: number): IAppointment {
    
    const userExists = getUserByIdService(userId);
    if (!userExists) {
        throw new Error(`No se encontró ningún usuario con el ID ${userId}.`);
    }

 
    const newAppointmentsId = appointments.length + 1;

   
    const newAppointments: IAppointment = {
        id: newAppointmentsId,
        date: date,
        time: time,
        userId: userId,
        status: "active" 
    };

  
    appointments.push(newAppointments);

    return newAppointments;
}

function cancelAppointmentsService(appointmentId: number) {
   
    const turnToCancel = appointments.find(appointment => appointment.id === appointmentId);

    
    if (turnToCancel) {
        
        turnToCancel.status = "cancelled";
        console.log(`El turno con ID ${appointmentId} ha sido cancelado.`);
    } else {
        console.log(`No se encontró ningún turno con el ID ${appointmentId}.`);
    }
    return turnToCancel;
}

export{getAppointmentsService,createAppointmentsService,cancelAppointmentsService,getAppointmentsServiceById}
