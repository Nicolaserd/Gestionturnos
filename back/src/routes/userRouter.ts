import { Router } from "express";

import {getUsers,getUsersId, postUserLogin, postUsersRegistrer} from "../controllers/index";
const userRouter = Router();

userRouter.get("/",getUsers );

userRouter.get("/:id",getUsersId );

userRouter.post("/register",postUsersRegistrer );

userRouter.post("/login", postUserLogin);

export default userRouter;