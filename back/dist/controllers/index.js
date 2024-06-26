"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAppointmentSchedule = exports.putAppointmentCancel = exports.getappointment = exports.getAppointments = exports.postUsersRegistrer = exports.postUserLogin = exports.getUsersId = exports.getUsers = void 0;
var getUsers_1 = require("./users/getUsers");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return __importDefault(getUsers_1).default; } });
var getUsersId_1 = require("./users/getUsersId");
Object.defineProperty(exports, "getUsersId", { enumerable: true, get: function () { return __importDefault(getUsersId_1).default; } });
var postUserLogin_1 = require("./users/postUserLogin");
Object.defineProperty(exports, "postUserLogin", { enumerable: true, get: function () { return __importDefault(postUserLogin_1).default; } });
var postUsersRegistrer_1 = require("./users/postUsersRegistrer");
Object.defineProperty(exports, "postUsersRegistrer", { enumerable: true, get: function () { return __importDefault(postUsersRegistrer_1).default; } });
var getAppointments_1 = require("./appointments/getAppointments");
Object.defineProperty(exports, "getAppointments", { enumerable: true, get: function () { return __importDefault(getAppointments_1).default; } });
var getappointment_1 = require("./appointments/getappointment");
Object.defineProperty(exports, "getappointment", { enumerable: true, get: function () { return __importDefault(getappointment_1).default; } });
var putAppointmentCancel_1 = require("./appointments/putAppointmentCancel");
Object.defineProperty(exports, "putAppointmentCancel", { enumerable: true, get: function () { return __importDefault(putAppointmentCancel_1).default; } });
var postAppointmentSchedule_1 = require("./appointments/postAppointmentSchedule");
Object.defineProperty(exports, "postAppointmentSchedule", { enumerable: true, get: function () { return __importDefault(postAppointmentSchedule_1).default; } });
