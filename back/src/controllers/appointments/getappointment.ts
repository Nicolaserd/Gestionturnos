import { Request, Response } from "express";
import {getAppointmentsServiceById} from "../../services/appointmentService";
export default (req: Request, res: Response): void => {
    const appId :number|null = parseInt(req.params.id);
    let getAppointmentById =  getAppointmentsServiceById(appId);
    res.status(200).json(getAppointmentById);
  };