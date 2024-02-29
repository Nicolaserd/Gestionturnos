"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter_1 = __importDefault(require("./routes/userRouter"));
var appointmentRouter_1 = __importDefault(require("./routes/appointmentRouter"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var app = express();
app.use((0, cors_1.default)());
app.use(express.json());
app.use((0, morgan_1.default)("dev"));
app.use("/users", userRouter_1.default);
app.use("/appointments", appointmentRouter_1.default);
exports.default = app;
