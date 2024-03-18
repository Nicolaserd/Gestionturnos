import { Router } from "express";

import {getAppointments,putAppointmentCancel,postAppointmentSchedule,getappointment} from "../controllers/index";
import createCitaMiddleware from "../Middlewares/createCitaMiddleware";
import cancelCitaMiddleware from "../Middlewares/cancelCitaMiddleware";
const appointmentRouter = Router();

appointmentRouter.get("/:id",getappointment );

appointmentRouter.get("/", getAppointments);

appointmentRouter.post("/schedule",createCitaMiddleware,postAppointmentSchedule );

appointmentRouter.put("/cancel/:id",cancelCitaMiddleware,putAppointmentCancel );

export default appointmentRouter;