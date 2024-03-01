"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCredentialsService = exports.validateCredentialsService = void 0;
var credentials = [
    {
        id: 101,
        username: "john_doe",
        password: "jd@123"
    },
    {
        id: 102,
        username: "jane_smith",
        password: "js@456"
    },
    {
        id: 103,
        username: "alice_johnson",
        password: "aj@789"
    },
    {
        id: 104,
        username: "bob_brown",
        password: "bb@abc"
    }
];
function createCredentialsService(username, password) {
    var newId = credentials.length + 1;
    var newCredential = {
        id: newId,
        username: username,
        password: password
    };
    credentials.push(newCredential);
    return newId;
}
exports.createCredentialsService = createCredentialsService;
function validateCredentialsService(username, password) {
    var credential = credentials.find(function (cred) { return cred.username === username; });
    if (credential && credential.password === password) {
        return credential.id;
    }
    return null;
}
exports.validateCredentialsService = validateCredentialsService;
;
