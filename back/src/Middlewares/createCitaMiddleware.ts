import { AppDataSource } from "../config/data-source";
import { NextFunction, Request, Response } from "express";
import moment from "moment";

async function createCitaMiddleware(req: Request, res: Response, next: NextFunction) {
    const { date, time, userId } = req.body;

    // Validar la fecha y hora
    const datetimeStr = date + ' ' + time;
    const datetimeFormat = 'YYYY-MM-DD HH:mm'; // Formato de fecha y hora esperado (ISO)
    const currentDatetime = moment(); // Fecha y hora actual
    const inputDatetime = moment(datetimeStr, datetimeFormat);

    if (!inputDatetime.isValid()) {
        return res.status(400).json({ error: "Formato de fecha/hora inválido." });
    }

    if (inputDatetime.isBefore(currentDatetime)) {
        return res.status(400).json({ error: "La fecha/hora proporcionada está en el pasado." });
    }
    
    if (inputDatetime.isSame(currentDatetime, 'day')) {
        return res.status(400).json({ error: "No se puede programar una cita para el día actual." });
    }

    next();
}

export default createCitaMiddleware;