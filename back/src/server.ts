import express = require('express');
import userRouter from './routes/userRouter';
import appointmentRouter from './routes/appointmentRouter';

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/", appointmentRouter);


export default app;