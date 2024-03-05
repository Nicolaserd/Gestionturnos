import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import { NextFunction, Request, Response } from "express";
import CredentialDto from "../dto/CredentialDto";

async function uniqueUserAndPasswordMiddleware(req: Request, res: Response, next: NextFunction)  {
                
        const {username,password} = req.body;
        const existingUser = await AppDataSource.getRepository(Credential).findOneBy({
            username: username
        });

        if (existingUser) {
            return res.status(400).json({ error: "El username ya está en uso." });
        }
    
        const existingPassword = await AppDataSource.getRepository(Credential).findOneBy({
            password:password
        });
     
        if (existingPassword) {
            return res.status(400).json({ error: "La contraseña ya está en uso." });
        }
        next();
    }
    export default uniqueUserAndPasswordMiddleware;