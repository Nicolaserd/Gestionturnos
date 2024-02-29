import ICredential from "./ICredential";
export default interface IUser {
    id:number;
    name:string;
    email:string;
    birthdate:string;
    nDni:number;
    credentialsId:ICredential["id"];
  }