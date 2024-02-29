import ICredential from "../interfaces/ICredential";
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

 function createCredentialsService(username: string, password: string):number{
  
    const newId = credentials.length + 1;
    
   
    const newCredential: ICredential = {
        id: newId,
        username: username,
        password: password
    };
    
   
    credentials.push(newCredential);
    

    return newId;
}


 function validateCredentialsService(username: string, password: string): number|null  {
    const credential = credentials.find(cred => cred.username === username);
    if (credential && credential.password === password) {
        return credential.id;
    }
    return null;
};

export{validateCredentialsService,createCredentialsService};