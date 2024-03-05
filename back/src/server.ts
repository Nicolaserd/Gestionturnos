import express = require('express');
import userRouter from './routes/userRouter';
import appointmentRouter from './routes/appointmentRouter';
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));


app.use("/users", userRouter);
app.use("/appointments", appointmentRouter);


export default app;