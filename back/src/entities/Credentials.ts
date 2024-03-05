import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users"; 

@Entity({ name: "credentials" })
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"text", unique: true })
    username: string;

    @Column({type:"text", unique: true })
    password: string;

    @OneToOne(() => User, (user) => user.credential)
    user: User;
   
}
