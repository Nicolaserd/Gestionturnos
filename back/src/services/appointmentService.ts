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
    if(!users){
        throw new Error("No se encontraron turnos.");
    }
    return users;
}
async function getAppointmentsServiceById(id:number) {

    if (!id) {
        throw new Error("El ID de la cita  no esta");
    }
    const appointmentById = await AppDataSource.getRepository(appointment).findOne({
        where: { id: id },
        relations: ['user']
    });
    
    if (!appointmentById) {
        throw new Error("Turno no encontrado");
    }
    return appointmentById

}

async function createAppointmentsService(date: string, time: string, userId: number) {

    if (!date || !time || !userId) {
        throw new Error(`Datos incompletos`);
    }
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    
    //! Empieza la Transaction
    try {
        await queryRunner.startTransaction()

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
        await queryRunner.manager.save(appointmentCreated)

        return appointmentCreated;
        
    } catch (error:any) {
        queryRunner.rollbackTransaction();
        throw new Error(error.message);
    }finally{
        queryRunner.release()
    }

}

async function cancelAppointmentsService(appointmentId: number) {
    const queryRunner = AppDataSource.createQueryRunner();

    try {
        await queryRunner.connect();
        await queryRunner.startTransaction();

        if (!appointmentId) {
            throw new Error(`ID de cita vacío`);
        }
        
        const turnToCancel = await getAppointmentsServiceById(appointmentId);
        
        if (!turnToCancel) {
            throw new Error(`No se encontró ningún turno con el ID ${appointmentId}.`);
        }

        await AppDataSource.getRepository(appointment).merge(turnToCancel, { status: "cancelled" });
        await queryRunner.manager.save(turnToCancel);
        
        await queryRunner.commitTransaction();

        return turnToCancel;
    } catch (error:any) {
        await queryRunner.rollbackTransaction();
        return error.message; 
    } finally {
        await queryRunner.release();
    }
}

export{getAppointmentsService,createAppointmentsService,cancelAppointmentsService,getAppointmentsServiceById}
