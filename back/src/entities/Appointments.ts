import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Users";
type tipoStatus= "active" | "cancelled";
@Entity({
        name : "appointments"
})
export class appointment {
    @PrimaryGeneratedColumn()
    id:number

    @Column("text")
    date: string;

    @Column("text")
    time: string;  

   @Column("text")
    status: tipoStatus;

    @ManyToOne(() => User, (user) => user.appointment)
    user: User


  }