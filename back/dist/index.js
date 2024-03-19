"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var server_1 = __importDefault(require("./server"));
require("reflect-metadata");
var data_source_1 = require("./config/data-source");
dotenv.config();
var PORT = process.env.PORT || 3000;
data_source_1.AppDataSource.initialize()
    .then(function (res) {
    console.log("conexión a la base de datos realizada con exito");
    server_1.default.listen(PORT, function () {
        console.log("Server listening on port ".concat(PORT));
    });
});
