import { Request, Response } from "express";
export default (req: Request, res: Response): void => {
    res.json({"Message":"Agendar un nuevo turno."});
  };