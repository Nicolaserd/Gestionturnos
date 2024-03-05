import { Request, Response } from "express";
import {getAppointmentsServiceById} from "../../services/appointmentService";
export default async (req: Request, res: Response) => {
  try {
    const appId :number|null = parseInt(req.params.id);
    let getAppointmentById = await getAppointmentsServiceById(appId);
    res.status(200).json(getAppointmentById);    
  } catch (error:any) {
    res.status(404).json(error.message);  
  }
  
  };