import { DataSource } from"typeorm";
import { User } from "../entities/Users";
import { appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";
import { AppointmentSubscriberUpdate, appointmentSubscriber } from "../subscribers";
import "dotenv/config";

const password_db = process.env.DB_PASSWORD

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: password_db,
    database: "banco",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User,appointment,Credential],
    subscribers: [appointmentSubscriber,AppointmentSubscriberUpdate],
    migrations: [],
})