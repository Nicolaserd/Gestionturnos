import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { appointment } from "../entities/Appointments";
import nodemailer from 'nodemailer';
import { SentMessageInfo } from 'nodemailer';

import "dotenv/config";

const e_mail = process.env.e_mail
const e_mail_password = process.env.e_mail_password

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: e_mail , 
        pass: e_mail_password
    }
});

@EventSubscriber()
export class appointmentSubscriber
  implements EntitySubscriberInterface<appointment>
  {
    listenTo() {

        return appointment;
    }

    afterInsert(event: InsertEvent<appointment>) {

        const appointmentSubscriber = event.entity;
        
        const mailOptions = {
            from: "nicolasinchaustegui@outlook.com", 
            to: appointmentSubscriber.user.email, 
            subject: `Confirmación de cita para el ${appointmentSubscriber.date}`,
            text: `Le escribo para confirmarle la cita que tenemos programada para el ${appointmentSubscriber.date}, a las ${appointmentSubscriber.time}.` 
        };

        transporter.sendMail(mailOptions, function(error: Error | null, info: nodemailer.SentMessageInfo){
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
            } else {
                console.log('Correo electrónico enviado correctamente:', info.response);
            }
        });
    }
  }

  @EventSubscriber()
export class AppointmentSubscriberUpdate implements EntitySubscriberInterface<appointment> {
    listenTo() {
        return appointment;
    }

    afterUpdate(event: UpdateEvent<appointment>) {

        const appointmentSubscriberUpdate = event.entity
        if(appointmentSubscriberUpdate)
        {
            const mailOptions = {
                from: "nicolasinchaustegui@outlook.com", 
                to: appointmentSubscriberUpdate.user.email, 
                subject: `Cancelacion de cita para el ${appointmentSubscriberUpdate.date}`,
                text: `Le escribo para cancelar la cita que tenemos programada para el ${appointmentSubscriberUpdate.date}, a las ${appointmentSubscriberUpdate.time}.` 
            };
            transporter.sendMail(mailOptions, function(error: Error | null, info: nodemailer.SentMessageInfo){
                if (error) {
                    console.error('Error al enviar el correo electrónico:', error);
                } else {
                    console.log('Correo electrónico enviado correctamente:', info.response);
                }
            });
        }
       

       
        
    }
}