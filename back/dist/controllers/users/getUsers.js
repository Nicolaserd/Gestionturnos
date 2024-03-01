"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userServices_1 = require("../../services/userServices");
exports.default = (function (req, res) {
    res.status(200).json(userServices_1.getUsersService);
});
