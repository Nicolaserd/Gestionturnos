import { Request, Response } from "express";
import {createAppointmentsService} from "../../services/appointmentService";
export default async (req: Request, res: Response) => {
  try {

    const {date, time, userId}=req.body;
    const createAppointment = await createAppointmentsService(date, time, userId);
    res.status(200).json(createAppointment);

  } catch (error) {
    console.log(error);
  }
    
  };