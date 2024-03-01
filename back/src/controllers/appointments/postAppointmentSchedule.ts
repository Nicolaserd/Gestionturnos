import { Request, Response } from "express";
import {createAppointmentsService} from "../../services/appointmentService";
export default (req: Request, res: Response): void => {
    const {date, time, userId}=req.body;
    let createAppointment = createAppointmentsService(date, time, userId);
    res.json({"Message":"creado una nueva cita",createAppointment});
  };