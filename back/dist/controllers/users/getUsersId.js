"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userServices_1 = require("../../services/userServices");
exports.default = (function (req, res) {
    var userId = parseInt(req.params.id);
    var getUserById = (0, userServices_1.getUserByIdService)(userId);
    res.status(200).json(getUserById);
});
