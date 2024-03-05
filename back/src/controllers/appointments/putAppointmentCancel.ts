import { Request, Response } from "express";
import {cancelAppointmentsService} from "../../services/appointmentService";
export default async (req: Request, res: Response) => {
  try {
    const {appointmentId}=req.body;
    let cancelAppointment = await cancelAppointmentsService(parseInt(appointmentId));
    res.status(200).json({"Message":"cancelda la  cita",cancelAppointment});

  } catch (error:any) {
    res.status(404).json(error.message);
  }
   
  };