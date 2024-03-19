"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var createCitaMiddleware_1 = __importDefault(require("../Middlewares/createCitaMiddleware"));
var cancelCitaMiddleware_1 = __importDefault(require("../Middlewares/cancelCitaMiddleware"));
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/:id", index_1.getappointment);
appointmentRouter.get("/", index_1.getAppointments);
appointmentRouter.post("/schedule", createCitaMiddleware_1.default, index_1.postAppointmentSchedule);
appointmentRouter.put("/cancel/:id", cancelCitaMiddleware_1.default, index_1.putAppointmentCancel);
exports.default = appointmentRouter;
