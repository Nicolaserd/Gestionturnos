import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credentials"; 
import { appointment } from "./Appointments";

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    email: string;

    @Column("text")
    birthdate: string;

    @Column({type:"integer", unique: true })
    nDni: number;

    @OneToOne(() => Credential, (credential) => credential.user)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => appointment, (appointment) => appointment.user)
    appointment: appointment[]
   
}
