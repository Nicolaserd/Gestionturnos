import CredentialDto from "../dto/CredentialDto";
import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser";
import {createCredentialsService} from "./credentialService";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/Users";
// let users: IUser[] = [
    // {
    //     id: 1,
    //     name: "John Doe",
    //     email: "john@example.com",
    //     birthdate: "1990-05-15",
    //     nDni: 12345678,
    //     username: "john_doe",
    //     password: "jd@123"
    // },
    // {
        
    //     name: "Jane Smith",
    //     email: "jane@example.com",
    //     birthdate: "1985-09-20",
    //     nDni: 87654321,
    //     username: "jane_smith",
    //     password: "js@456"
    // },
    // {
    //     id: 3,
    //     name: "Alice Johnson",
    //     email: "alice@example.com",
    //     birthdate: "1992-11-10",
    //     nDni: 54321678,
    //     username: "alice_johnson",
    //     password: "aj@789"
    // },
//     {
//         id: 4,
//         name: "Bob Brown",
//         email: "bob@example.com",
//         birthdate: "1988-03-25",
//         nDni: 98765432,
//         credentialsId: 104
//     }
    
// ];


 async function getUsersService() {
    const users = await AppDataSource.getRepository(User).find({
        relations:{
            credential:true
        }
    })
    return users;
}

async function getUserByIdService(id: number) {

    const results = await AppDataSource.getRepository(User).findOne({
        where: { id: id },
        relations: ['credential']
    });
    return results
}

 async function createUserService(user:UserDto,credential:CredentialDto) {
      
    const newUser:UserDto= {

        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni, 
        
    };

    const userCreated = await AppDataSource.getRepository(User).create(newUser)
    const results = await AppDataSource.getRepository(User).save(userCreated)

    const credentialsId = await createCredentialsService(credential,results.id);
    if(!credentialsId){
        throw new Error("Credenciales invalidas");
    }

    return results;
}

export {getUsersService,createUserService,getUserByIdService} ;