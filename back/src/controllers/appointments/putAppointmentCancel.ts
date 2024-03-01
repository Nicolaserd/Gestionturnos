import { Request, Response } from "express";
import {cancelAppointmentsService} from "../../services/appointmentService";
export default (req: Request, res: Response): void => {
    const {appointmentId}=req.body;
    let cancelAppointment = cancelAppointmentsService(appointmentId);
    res.json({"Message":"cancelda la  cita",cancelAppointment});
  };