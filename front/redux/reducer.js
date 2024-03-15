import { createSlice } from "@reduxjs/toolkit";
const initialStateUser = {
    user:{}
}
export const userSlice = createSlice({
    name:"user",
    initialState:initialStateUser,
    reducers:{

        addUser:(state,action)=>{
            state.user = action.payload;
        }, 
        logOutUser:(state,action)=>{
            state.user={login:false}
        }
        
    }
})
const initialStateAppointmentSlice = {
    userAppointments: {
        appointments: [] 
    }
}

export const userAppointmentsSlice = createSlice({
    name:"userAppointments",
    initialState:initialStateAppointmentSlice,
    reducers:{
        addUserAppointments:(state,action)=>{
          state.userAppointments.appointments  = action.payload;
        }, 
        logOutUserAppointments:(state,action)=>{
            state.userAppointments.appointments  = [] ;
          }
       
    }
})

export const {addUser,logOutUser} = userSlice.actions
export const {addUserAppointments,logOutUserAppointments} = userAppointmentsSlice.actions
export default userSlice.reducer
export const reducers = {
    user: userSlice,
    appointment: userAppointmentsSlice
  };
