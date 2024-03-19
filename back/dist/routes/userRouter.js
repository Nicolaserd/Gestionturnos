"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("../controllers/index");
var uniqueUserAndPasswordMiddleware_1 = __importDefault(require("../Middlewares/uniqueUserAndPasswordMiddleware"));
var userRouter = (0, express_1.Router)();
userRouter.get("/", index_1.getUsers);
userRouter.get("/:id", index_1.getUsersId);
userRouter.post("/register", uniqueUserAndPasswordMiddleware_1.default, index_1.postUsersRegistrer);
userRouter.post("/login", index_1.postUserLogin);
exports.default = userRouter;
