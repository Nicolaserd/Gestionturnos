import { Request, Response } from "express";
import {createUserService} from "../../services/userServices";
export default async (req: Request, res: Response) => {
  try {
    const {name, email, birthdate, nDni, username, password}=req.body;
    let createUser = await createUserService ({name, email, birthdate, nDni}, {username, password});
    res.status(201).json(createUser);
  } catch (error:any) {
    res.status(400).json(error.message);
  }
  
  };