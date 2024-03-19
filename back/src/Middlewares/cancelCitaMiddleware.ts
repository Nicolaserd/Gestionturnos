import { AppDataSource } from "../config/data-source";
import { NextFunction, Request, Response } from "express";
import { appointment } from "../entities/Appointments";
import moment from "moment";

async function cancelCitaMiddleware(req: Request, res: Response, next: NextFunction) {
    
    const appointmentId:number =parseInt(req.params.id);
    const existingAppointment = await AppDataSource.getRepository(appointment).findOneBy({

        id: appointmentId
    });

    if (existingAppointment?.status==="cancelled") {
        return res.status(400).json({ error: "Cita ya cancelada" }); 
    }
    
    // Validar la fecha y hora
    const datetimeStr = existingAppointment?.date + ' ' + existingAppointment?.time;
    
    const datetimeFormat = 'YYYY-MM-DD HH:mm'; // Formato de fecha y hora esperado (ISO)
    const currentDatetime = moment(); // Fecha y hora actual
    const inputDatetime = moment(datetimeStr, datetimeFormat);

    if (currentDatetime.isSameOrAfter(inputDatetime)) {

        return res.status(400).json({ error: "No se puede cancelar una cita que ya ha comenzado o termino." });

    }
    
    // Calcular la hora límite para cancelar la cita (media hora antes de su inicio)
    const cancelLimit = inputDatetime.clone().subtract(30, 'minutes');

    // Verificar si estamos dentro del límite de cancelación
    if (currentDatetime.isSameOrAfter(cancelLimit)) {
        return res.status(400).json({ error: "No se puede cancelar una cita que está a menos de media hora de iniciar." });
    }

    next();
}

export default cancelCitaMiddleware;