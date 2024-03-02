import { Request, Response } from "express";
import {getAppointmentsServiceById} from "../../services/appointmentService";
export default async (req: Request, res: Response) => {
    const appId :number|null = parseInt(req.params.id);
    let getAppointmentById = await getAppointmentsServiceById(appId);
    res.status(200).json(getAppointmentById);
  };