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
        relations: ['appointment']
    });
    if (!results) {
        throw new Error(`No se encontró ningún usuario con el ID ${id}.`);
    }
    return results
}

 async function createUserService(user:UserDto,credential:CredentialDto) {
    
   
    if (Object.values(user).some(value => !value)) {
        throw new Error("Los datos del usuario están incompletos");
    }
    
    if (Object.values(credential).some(value => !value)) {
        throw new Error("Los datos de credenciales están incompletos");
    }
    if (user.nDni < -2147483648 || user.nDni > 2147483647) {
        throw new Error("ndni número está fuera del rango");
        
    }
   
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    
    //! Empieza la Transaction
    await queryRunner.startTransaction()
try {
    const newUser:UserDto= {

        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni, 
        
    };

    const userCreated = await AppDataSource.getRepository(User).create(newUser)
    const results = await AppDataSource.getRepository(User).manager.save(userCreated)
   
    const credentialsId = await createCredentialsService(credential,results.id);
    if(!credentialsId){
        throw new Error("Usuario inexistente");
    }
    if(!userCreated){
        throw new Error("Usuario no se ha creado");
    }

    return results;
    
} catch (error:any) {
    queryRunner.rollbackTransaction();
    throw new Error(error.message);
}finally{
    queryRunner.release()
}
}

export {getUsersService,createUserService,getUserByIdService} ;