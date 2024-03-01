import { Request, Response } from "express";
import {getUserByIdService} from "../../services/userServices";
export default (req: Request, res: Response): void => {
    const userId :number|null = parseInt(req.params.id);
    let getUserById =  getUserByIdService(userId);
    res.status(200).json(getUserById);
  };