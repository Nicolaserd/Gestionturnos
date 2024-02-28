import { Router } from "express";

import {getAppointments,putAppointmentCancel,postAppointmentSchedule,getappointment} from "../controllers/index";
const appointmentRouter = Router();

appointmentRouter.get("/appointment",getappointment );

appointmentRouter.get("/appointments", getAppointments);

appointmentRouter.post("/appointment/schedule",postAppointmentSchedule );

appointmentRouter.put("/appointment/cancel",putAppointmentCancel );

export default appointmentRouter;