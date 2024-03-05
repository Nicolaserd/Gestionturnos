import { Request, Response } from "express";
import {getAppointmentsService} from "../../services/appointmentService";
export default async (req: Request, res: Response) => {
  try {
   const  appointments = await getAppointmentsService();
   res.status(200).json(appointments);
  } catch (error:any) {
    res.status(400).json(error.message);
  }
  
  };