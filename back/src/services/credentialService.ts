import ICredential from "../interfaces/ICredential";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials";
import CredentialDto from "../dto/CredentialDto";
// import UserDto from "../dto/UserDto";
import { User } from "../entities/Users";
// const credentials: ICredential[] = [
//     {
//         id: 101,
//         username: "john_doe",
//         password: "jd@123"
//     },
//     {
//         id: 102,
//         username: "jane_smith",
//         password: "js@456"
//     },
//     {
//         id: 103,
//         username: "alice_johnson",
//         password: "aj@789"
//     },
//     {
//         id: 104,
//         username: "bob_brown",
//         password: "bb@abc"
//     }
    
// ];
async function validateCredentialsService(credentialsValidate:CredentialDto)  {

    try {
        
        if (Object.values(credentialsValidate).some(value => !value)) {
            throw new Error("Los datos de sus credenciales están incompletos")
        }
        
        const {username,password} = credentialsValidate;
        const credential = await AppDataSource.getRepository(Credential).findOneBy({
            username: username,
            password:password
        });
    
    
         if (credential) {
            return {
                login:true,
                user:credential.user
            };
        }
        else{
            throw new Error("Credenciales no coinciden")
        }
    } catch (error:any) {
        throw new Error(error.message)
    }
  
     
         
}

 async function createCredentialsService(credentials:CredentialDto,userId:number){
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    
    //! Empieza la Transaction
    
    try {
        await queryRunner.startTransaction()
        const credentialsCreated = await AppDataSource.getRepository(Credential).create(credentials)
        const results = await queryRunner.manager.save(credentialsCreated)
    
        const userFindById = await AppDataSource.getRepository(User).findOneBy({
            id: userId
        })

        
        if(userFindById){
            userFindById.credential = credentialsCreated;
            await queryRunner.manager.save(userFindById); 
            await queryRunner.commitTransaction(); 
            return results;
        }
        else{
            throw new Error("Error en usuario usuario inexistente");
        }

        
    } catch (error) {
        queryRunner.rollbackTransaction();
        throw new Error("Error en usuario usuario inexistente");
    }finally{
        queryRunner.release()
    }
}


export{validateCredentialsService,createCredentialsService};