
import {reducers} from "./reducer"

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducer";


const store = configureStore({
  reducer: {
    user: reducers.user.reducer, 
    userAppointments: reducers.appointment.reducer, 
  }
});

export default store;