import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dto/AppointmentDto";
import { appointment } from "../entities/Appointments";
import IAppointment from"../interfaces/IAppointment";
import {getUserByIdService} from "./userServices";

// const appointments: IAppointment[] = [
//     {
//         id: 1,
//         date: "2024-03-01",
//         time: "09:00:00",
//         userId: 1,
//         status: "active"
//     },
//     {
//         id: 2,
//         date: "2024-03-02",
//         time: "10:30:00",
//         userId: 2,
//         status: "active"
//     },
//     {
//         id: 3,
//         date: "2024-03-03",
//         time: "11:45:00",
//         userId: 3,
//         status: "cancelled"
//     },
//     {
//         id: 4,
//         date: "2024-03-04",
//         time: "13:15:00",
//         userId: 4,
//         status: "active"
//     }
    
// ];

async function getAppointmentsService() {
    const users = await AppDataSource.getRepository(appointment).find({
        relations:{
            user:true
        }
    })
    return users;
}
async function getAppointmentsServiceById(id:number) {

    const appointmentById = await AppDataSource.getRepository(appointment).findOne({
        where: { id: id },
        relations: ['user']
    });
    
    if (!appointment) {
        throw new Error("Turno no encontrado");
    }
    return appointmentById

}

async function createAppointmentsService(date: string, time: string, userId: number) {
    
    const userExists = await getUserByIdService(userId);
    if (!userExists) {
        throw new Error(`No se encontró ningún usuario con el ID ${userId}.`);
    }

  
    const newAppointment:AppointmentDto = {
        date: date,
        time: time,
        status: "active" 
    };

    const appointmentCreated = await AppDataSource.getRepository(appointment).create(newAppointment)
    appointmentCreated.user = userExists
    await AppDataSource.getRepository(appointment).save(appointmentCreated)

    return appointmentCreated;
}

async function cancelAppointmentsService(appointmentId: number) {
   
    const turnToCancel = await getAppointmentsServiceById(appointmentId)
    
    if (turnToCancel) {
        
        await AppDataSource.getRepository(appointment).merge(turnToCancel,{ status: "cancelled" })
        await AppDataSource.getRepository(appointment).save(turnToCancel);
        console.log(`El turno con ID ${appointmentId} ha sido cancelado.`);

    } else {
        console.log(`No se encontró ningún turno con el ID ${appointmentId}.`);
    }
    return turnToCancel;
}

export{getAppointmentsService,createAppointmentsService,cancelAppointmentsService,getAppointmentsServiceById}
