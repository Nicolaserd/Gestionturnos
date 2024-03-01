"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentsService = exports.createAppointmentsService = exports.getAppointmentsService = void 0;
var userServices_1 = require("./userServices");
var appointments = [
    {
        id: 1,
        date: "2024-03-01",
        time: "09:00:00",
        userId: 1,
        status: "active"
    },
    {
        id: 2,
        date: "2024-03-02",
        time: "10:30:00",
        userId: 2,
        status: "active"
    },
    {
        id: 3,
        date: "2024-03-03",
        time: "11:45:00",
        userId: 3,
        status: "cancelled"
    },
    {
        id: 4,
        date: "2024-03-04",
        time: "13:15:00",
        userId: 4,
        status: "active"
    }
];
function getAppointmentsService() {
    return appointments;
}
exports.getAppointmentsService = getAppointmentsService;
function createAppointmentsService(date, time, userId) {
    var userExists = (0, userServices_1.getUserByIdService)(userId);
    if (!userExists) {
        throw new Error("No se encontr\u00F3 ning\u00FAn usuario con el ID ".concat(userId, "."));
    }
    var newAppointmentsId = appointments.length + 1;
    var newAppointments = {
        id: newAppointmentsId,
        date: date,
        time: time,
        userId: userId,
        status: "active"
    };
    appointments.push(newAppointments);
    return newAppointments;
}
exports.createAppointmentsService = createAppointmentsService;
function cancelAppointmentsService(appointmentId) {
    var turnToCancel = appointments.find(function (appointment) { return appointment.id === appointmentId; });
    if (turnToCancel) {
        turnToCancel.status = "cancelled";
        console.log("El turno con ID ".concat(appointmentId, " ha sido cancelado."));
    }
    else {
        console.log("No se encontr\u00F3 ning\u00FAn turno con el ID ".concat(appointmentId, "."));
    }
}
exports.cancelAppointmentsService = cancelAppointmentsService;
