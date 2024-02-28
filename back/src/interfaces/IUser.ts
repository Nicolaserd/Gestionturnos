export default interface IUser {
    id:string;
    name:string;
    phone:number;
    email:string;
    credential:{
        password:string;
        username:string;
    };
    appointment:{
        state:boolean;
        hora:number;
        dia:number;
        mes:number;
    }
  }