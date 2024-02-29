import { Router } from "express";

import {getAppointments,putAppointmentCancel,postAppointmentSchedule,getappointment} from "../controllers/index";
const appointmentRouter = Router();

appointmentRouter.get("/:id",getappointment );

appointmentRouter.get("/", getAppointments);

appointmentRouter.post("/schedule",postAppointmentSchedule );

appointmentRouter.put("/cancel/:id",putAppointmentCancel );

export default appointmentRouter;