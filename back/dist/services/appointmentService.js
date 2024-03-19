"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentsServiceById = exports.cancelAppointmentsService = exports.createAppointmentsService = exports.getAppointmentsService = void 0;
var data_source_1 = require("../config/data-source");
var Appointments_1 = require("../entities/Appointments");
var userServices_1 = require("./userServices");
function getAppointmentsService() {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, data_source_1.AppDataSource.getRepository(Appointments_1.appointment).find({
                        relations: {
                            user: true
                        }
                    })];
                case 1:
                    users = _a.sent();
                    if (!users) {
                        throw new Error("No se encontraron turnos.");
                    }
                    return [2, users];
            }
        });
    });
}
exports.getAppointmentsService = getAppointmentsService;
function getAppointmentsServiceById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var appointmentById;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) {
                        throw new Error("El ID de la cita  no esta");
                    }
                    return [4, data_source_1.AppDataSource.getRepository(Appointments_1.appointment).findOne({
                            where: { id: id },
                            relations: ['user']
                        })];
                case 1:
                    appointmentById = _a.sent();
                    if (!appointmentById) {
                        throw new Error("Turno no encontrado");
                    }
                    return [2, appointmentById];
            }
        });
    });
}
exports.getAppointmentsServiceById = getAppointmentsServiceById;
function createAppointmentsService(date, time, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var queryRunner, userExists, newAppointment, appointmentCreated, responseAppointment, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!date || !time || !userId) {
                        throw new Error("Datos incompletos");
                    }
                    queryRunner = data_source_1.AppDataSource.createQueryRunner();
                    return [4, queryRunner.connect()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 9, 10, 11]);
                    return [4, queryRunner.startTransaction()];
                case 3:
                    _a.sent();
                    return [4, (0, userServices_1.getUserByIdService)(userId)];
                case 4:
                    userExists = _a.sent();
                    if (!userExists) {
                        throw new Error("No se encontr\u00F3 ning\u00FAn usuario con el ID ".concat(userId, "."));
                    }
                    newAppointment = {
                        date: date,
                        time: time,
                        status: "active"
                    };
                    return [4, data_source_1.AppDataSource.getRepository(Appointments_1.appointment).create(newAppointment)];
                case 5:
                    appointmentCreated = _a.sent();
                    appointmentCreated.user = userExists;
                    userExists.appointment.push(appointmentCreated);
                    return [4, queryRunner.manager.save(appointmentCreated)];
                case 6:
                    _a.sent();
                    return [4, queryRunner.manager.save(userExists)];
                case 7:
                    _a.sent();
                    responseAppointment = {
                        id: appointmentCreated.id,
                        date: appointmentCreated.date,
                        time: appointmentCreated.time,
                        status: appointmentCreated.status,
                        userId: userExists.id
                    };
                    return [4, queryRunner.commitTransaction()];
                case 8:
                    _a.sent();
                    return [2, responseAppointment];
                case 9:
                    error_1 = _a.sent();
                    queryRunner.rollbackTransaction();
                    throw new Error(error_1.message);
                case 10:
                    queryRunner.release();
                    return [7];
                case 11: return [2];
            }
        });
    });
}
exports.createAppointmentsService = createAppointmentsService;
function cancelAppointmentsService(appointmentId) {
    return __awaiter(this, void 0, void 0, function () {
        var queryRunner, turnToCancel, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryRunner = data_source_1.AppDataSource.createQueryRunner();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, 10, 12]);
                    return [4, queryRunner.connect()];
                case 2:
                    _a.sent();
                    return [4, queryRunner.startTransaction()];
                case 3:
                    _a.sent();
                    if (!appointmentId) {
                        throw new Error("ID de cita vac\u00EDo");
                    }
                    return [4, getAppointmentsServiceById(appointmentId)];
                case 4:
                    turnToCancel = _a.sent();
                    if (!turnToCancel) {
                        throw new Error("No se encontr\u00F3 ning\u00FAn turno con el ID ".concat(appointmentId, "."));
                    }
                    return [4, data_source_1.AppDataSource.getRepository(Appointments_1.appointment).merge(turnToCancel, { status: "cancelled" })];
                case 5:
                    _a.sent();
                    return [4, queryRunner.manager.save(turnToCancel)];
                case 6:
                    _a.sent();
                    return [4, queryRunner.commitTransaction()];
                case 7:
                    _a.sent();
                    return [2, turnToCancel];
                case 8:
                    error_2 = _a.sent();
                    return [4, queryRunner.rollbackTransaction()];
                case 9:
                    _a.sent();
                    return [2, error_2.message];
                case 10: return [4, queryRunner.release()];
                case 11:
                    _a.sent();
                    return [7];
                case 12: return [2];
            }
        });
    });
}
exports.cancelAppointmentsService = cancelAppointmentsService;
