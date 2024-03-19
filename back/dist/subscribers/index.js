"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSubscriberUpdate = exports.appointmentSubscriber = void 0;
var typeorm_1 = require("typeorm");
var Appointments_1 = require("../entities/Appointments");
var nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
var e_mail = process.env.e_mail;
var e_mail_password = process.env.e_mail_password;
var transporter = nodemailer_1.default.createTransport({
    service: 'outlook',
    auth: {
        user: e_mail,
        pass: e_mail_password
    }
});
var appointmentSubscriber = (function () {
    function appointmentSubscriber() {
    }
    appointmentSubscriber.prototype.listenTo = function () {
        return Appointments_1.appointment;
    };
    appointmentSubscriber.prototype.afterInsert = function (event) {
        var appointmentSubscriber = event.entity;
        var mailOptions = {
            from: "nicolasinchaustegui@outlook.com",
            to: appointmentSubscriber.user.email,
            subject: "Confirmaci\u00F3n de cita para el ".concat(appointmentSubscriber.date),
            text: "Le escribo para confirmarle la cita que tenemos programada para el ".concat(appointmentSubscriber.date, ", a las ").concat(appointmentSubscriber.time, ".")
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            }
            else {
                console.log('Correo electrónico enviado correctamente:', info.response);
            }
        });
    };
    appointmentSubscriber = __decorate([
        (0, typeorm_1.EventSubscriber)()
    ], appointmentSubscriber);
    return appointmentSubscriber;
}());
exports.appointmentSubscriber = appointmentSubscriber;
var AppointmentSubscriberUpdate = (function () {
    function AppointmentSubscriberUpdate() {
    }
    AppointmentSubscriberUpdate.prototype.listenTo = function () {
        return Appointments_1.appointment;
    };
    AppointmentSubscriberUpdate.prototype.afterUpdate = function (event) {
        var appointmentSubscriberUpdate = event.entity;
        if (appointmentSubscriberUpdate) {
            var mailOptions = {
                from: "nicolasinchaustegui@outlook.com",
                to: appointmentSubscriberUpdate.user.email,
                subject: "Cancelacion de cita para el ".concat(appointmentSubscriberUpdate.date),
                text: "Le escribo para cancelar la cita que tenemos programada para el ".concat(appointmentSubscriberUpdate.date, ", a las ").concat(appointmentSubscriberUpdate.time, ".")
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error('Error al enviar el correo electrónico:', error);
                }
                else {
                    console.log('Correo electrónico enviado correctamente:', info.response);
                }
            });
        }
    };
    AppointmentSubscriberUpdate = __decorate([
        (0, typeorm_1.EventSubscriber)()
    ], AppointmentSubscriberUpdate);
    return AppointmentSubscriberUpdate;
}());
exports.AppointmentSubscriberUpdate = AppointmentSubscriberUpdate;
