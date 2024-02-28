"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var appointmentRouter_1 = __importDefault(require("./routes/appointmentRouter"));
var app = express();
app.use(express.json());
app.use("/users", userRouter_1.default);
app.use("/", appointmentRouter_1.default);
exports.default = app;
