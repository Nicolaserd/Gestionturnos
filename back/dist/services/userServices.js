"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdService = exports.createUserService = exports.getUsersService = void 0;
var credentialService_1 = require("./credentialService");
var users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        birthdate: "1990-05-15",
        nDni: 12345678,
        credentialsId: 101
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        birthdate: "1985-09-20",
        nDni: 87654321,
        credentialsId: 102
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        birthdate: "1992-11-10",
        nDni: 54321678,
        credentialsId: 103
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob@example.com",
        birthdate: "1988-03-25",
        nDni: 98765432,
        credentialsId: 104
    }
];
function getUsersService() {
    return users;
}
exports.getUsersService = getUsersService;
function getUserByIdService(id) {
    return users.find(function (user) { return user.id === id; });
}
exports.getUserByIdService = getUserByIdService;
function createUserService(name, email, birthdate, nDni, username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var credentialsId, newUser;
        return __generator(this, function (_a) {
            credentialsId = (0, credentialService_1.createCredentialsService)(username, password);
            newUser = {
                id: users.length + 1,
                name: name,
                email: email,
                birthdate: birthdate,
                nDni: nDni,
                credentialsId: credentialsId
            };
            users.push(newUser);
            return [2, newUser];
        });
    });
}
exports.createUserService = createUserService;
