import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users"; 

@Entity({ name: "credentials" })
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    username: string;

    @Column("text")
    password: string;

    @OneToOne(() => User, (user) => user.credential)
    user: User;
   
}
