type tipoStatus= "active" | "cancelled";
export default interface IAppointment {
      id: number;
      date: string;
      time: string;  
      userId:number;    
      status: tipoStatus;
  }