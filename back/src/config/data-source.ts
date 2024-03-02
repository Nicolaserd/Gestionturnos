import { DataSource } from"typeorm";
import { User } from "../entities/Users";
import { appointment } from "../entities/Appointments";
import { Credential } from "../entities/Credentials";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234nicolas",
    database: "banco",
    synchronize: true,
    logging: false,
    entities: [User,appointment,Credential],
    subscribers: [],
    migrations: [],
})