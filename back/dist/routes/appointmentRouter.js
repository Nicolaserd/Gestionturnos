"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/appointment", index_1.getappointment);
appointmentRouter.get("/appointments", index_1.getAppointments);
appointmentRouter.post("/appointment/schedule", index_1.postAppointmentSchedule);
appointmentRouter.put("/appointment/cancel", index_1.putAppointmentCancel);
exports.default = appointmentRouter;
