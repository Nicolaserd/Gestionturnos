import { DataSource } from"typeorm";
import { User } from "../entities/Users";
import { appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";
import { AppointmentSubscriberUpdate, appointmentSubscriber } from "../subscribers";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234nicolas",
    database: "banco",
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User,appointment,Credential],
    subscribers: [appointmentSubscriber,AppointmentSubscriberUpdate],
    migrations: [],
})