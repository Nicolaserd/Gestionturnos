type tipoStatus= "active" | "cancelled";
export default interface AppointmentDto {
      date: string;
      time: string;  
      userId?:number;    
      status: tipoStatus;
  }