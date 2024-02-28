import { Request, Response } from "express";
export default (req: Request, res: Response): void => {
    res.json({"Message":"Login del usuario a la aplicación."});
  };