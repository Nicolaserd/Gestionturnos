"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Users_1 = require("../entities/Users");
var Appointments_1 = require("../entities/Appointments");
var Credentials_1 = require("../entities/Credentials");
var subscribers_1 = require("../subscribers");
require("dotenv/config");
var password_db = process.env.DB_PASSWORD;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: password_db,
    database: "banco",
    synchronize: true,
    logging: false,
    entities: [Users_1.User, Appointments_1.appointment, Credentials_1.Credential],
    subscribers: [subscribers_1.appointmentSubscriber, subscribers_1.AppointmentSubscriberUpdate],
    migrations: [],
});
