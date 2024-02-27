"use strict";
var User = (function () {
    function User(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return User;
}());
var Users = (function () {
    function Users() {
        this.users = [];
    }
    Users.prototype.getuser = function () {
        return this.users;
    };
    return Users;
}());
var repoUsers = new Users();
var pedro = new User("pedrito", 30);
repoUsers.users.push(pedro);
var maria = new User("Maria", 30);
repoUsers.users.push(maria);
var juan = new User("Juan", 40);
var sofia = new User("Sofia", 22);
var carlos = new User("Carlos", 35);
console.log(repoUsers.getuser());
var fibonacci = function (numf) {
    if (numf <= 1) {
        return numf;
    }
    else {
        return fibonacci(numf - 1) + fibonacci(numf - 2);
    }
};
console.log(fibonacci(8));
var arrayJuegos = function (juego) {
    var arrjuego = [];
    arrjuego[arrjuego.length - 1] = juego;
    return arrjuego;
};
var mate = {
    dueños: ["juan", "sofia"],
    num_pasajeros: 8,
    conductor: "pedro",
    placa: "EJY003",
    marca: "Ferrari"
};
console.log(mate);
