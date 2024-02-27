class User {

    nombre: string;
    edad: number;

    constructor(nombre:string,edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Users{

    users:User[];
    constructor(){
        this.users=[];
    }

    getuser():User[]{
        return this.users;
    }
}
let repoUsers :Users = new Users();
let pedro:User = new User("pedrito",30);
repoUsers.users.push(pedro);
let maria: User = new User("Maria", 30);
repoUsers.users.push(maria);
let juan: User = new User("Juan", 40);
let sofia: User = new User("Sofia", 22);
let carlos: User = new User("Carlos", 35);

console.log(repoUsers.getuser());

//* funciones

const fibonacci = (numf:number):number=>{
    if ( numf<= 1) {
        return numf;
    } else {
       return fibonacci(numf - 1) + fibonacci(numf - 2);
    }
}
console.log(fibonacci(8));

 type  juego = "futbol"|"ciclismo"|"atletismo";
let arrayJuegos =(juego:juego):string[]=>{
    let arrjuego:string[] = [];
    arrjuego [arrjuego.length-1]=juego;
    return arrjuego;

}

interface ICarro{
    placa:string;
    marca:string;
}
interface Icamion extends ICarro{
    dueños:string[];
    carga_max:number;
    num_pasajeros:number;
}
interface If1 extends ICarro{
    dueños:string[];
    num_pasajeros:number;
    conductor:string;
}

const mate:If1 ={

    dueños:["juan","sofia"],
    num_pasajeros:8,
    conductor:"pedro",
    placa:"EJY003",
    marca:"Ferrari"
}

console.log(mate);
