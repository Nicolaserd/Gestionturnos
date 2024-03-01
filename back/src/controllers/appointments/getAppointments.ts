import { Request, Response } from "express";
import {getAppointmentsService} from "../../services/appointmentService";
export default (req: Request, res: Response): void => {
  res.status(200).json(getAppointmentsService());
  };