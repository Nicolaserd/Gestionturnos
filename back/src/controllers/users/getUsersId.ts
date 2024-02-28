import { Request, Response } from "express";
export default (req: Request, res: Response): void => {
    res.json({"Message":"Obtener el detalle de un usuario específico."});
  };