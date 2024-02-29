import IUser from "../interfaces/IUser";
import {createCredentialsService} from "./credentialService";
let users: IUser[] = [
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


 function getUsersService(): IUser[] {
    return users;
}

function getUserByIdService(id: number): IUser|undefined {
    return users.find(user => user.id === id);
}

async function createUserService(name: string, email: string, birthdate: string, nDni: number, username: string, password: string): Promise<IUser | undefined>  {
    
    const credentialsId = createCredentialsService(username, password);

   
    const newUser: IUser = {
        id: users.length + 1, 
        name: name,
        email: email,
        birthdate: birthdate,
        nDni: nDni,
        credentialsId: credentialsId
    };


    users.push(newUser);

    return newUser;
}

export {getUsersService,createUserService,getUserByIdService} ;