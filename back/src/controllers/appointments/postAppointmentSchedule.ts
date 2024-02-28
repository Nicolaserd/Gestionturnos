import { Request, Response } from "express";
export default (req: Request, res: Response): void => {
    res.json({"Message":"Cambiar el estatus de un turno a cancelled."});
  };