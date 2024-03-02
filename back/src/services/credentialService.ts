import ICredential from "../interfaces/ICredential";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import CredentialDto from "../dto/CredentialDto";
import UserDto from "../dto/UserDto";
import { User } from "../entities/Users";
const credentials: ICredential[] = [
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

 async function createCredentialsService(credentials:CredentialDto,userId:number){

    const credentialsCreated = await AppDataSource.getRepository(Credential).create(credentials)
    const results = await AppDataSource.getRepository(Credential).save(credentialsCreated)

    const userFindById = await AppDataSource.getRepository(User).findOneBy({
        id: userId
    })
    if(userFindById){
        userFindById.credential = credentialsCreated
        await AppDataSource.getRepository(User).save(userFindById)
    }
    else{
        throw new Error("Error en usuario");
    }
    
    

    return results.id;
}


 async function validateCredentialsService(credentialsValidate:CredentialDto)  {

    const {username,password} = credentialsValidate;
    const credential = await AppDataSource.getRepository(Credential).findOneBy({
        username: username,
        password:password
    });

     if (credential) {
        return credential.id;
    }

    return null;
}

export{validateCredentialsService,createCredentialsService};