import { Router } from "express";

import {getUsers,getUsersId, postUserLogin, postUsersRegistrer} from "../controllers/index";
import uniqueUserAndPasswordMiddleware  from "../Middlewares/uniqueUserAndPasswordMiddleware";
const userRouter = Router();

userRouter.get("/",getUsers );

userRouter.get("/:id",getUsersId );

userRouter.post("/register",uniqueUserAndPasswordMiddleware,postUsersRegistrer );

userRouter.post("/login", postUserLogin);

export default userRouter;