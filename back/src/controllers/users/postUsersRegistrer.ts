import { Request, Response } from "express";
import {createUserService} from "../../services/userServices";
export default (req: Request, res: Response): void => {
  const {name, email, birthdate, nDni, username, password}=req.body;
  let createUser =  createUserService (name, email, birthdate, nDni, username, password);
  res.status(201).json({createUser,"message":"Usuario registrado correctamente"});

  };