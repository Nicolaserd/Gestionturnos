import { Request, Response } from "express";
import {getUsersService} from "../../services/userServices";
export default (req: Request, res: Response): void => {
    console.log(getUsersService());
    res.status(200).json(getUsersService());
  };