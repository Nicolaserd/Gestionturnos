import { Request, Response } from "express";
import {getUserByIdService} from "../../services/userServices";
export default async (req: Request, res: Response) => {
  try {
    const userId :number|null = parseInt(req.params.id);
    let getUserById =  await getUserByIdService(userId);
    res.status(200).json(getUserById);
  } catch (error) {
    console.log(error)
  }
    
  };