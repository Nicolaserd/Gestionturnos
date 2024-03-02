import {  Request,Response } from "express";
import {getUsersService} from "../../services/userServices";
export default async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
   
  };