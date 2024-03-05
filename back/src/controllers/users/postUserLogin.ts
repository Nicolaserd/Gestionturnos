import { Request, Response } from "express";
import {validateCredentialsService} from "../../services/credentialService";
export default async (req: Request, res: Response) => {
  try {

    const {username, password}=req.body;
    let validateCredentials =  await validateCredentialsService ({username,password});
    res.status(200).json(validateCredentials);

  } catch (error:any) {
    
    res.status(400).json(error.message);
  }
   
  };