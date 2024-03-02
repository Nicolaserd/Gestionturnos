import dotenv = require('dotenv');
import app from './server';
//!importarlo en el index segun la documentacion
import "reflect-metadata"
import { AppDataSource } from './config/data-source';
dotenv.config();
const PORT = process.env.PORT || 3000;
AppDataSource.initialize()
.then( res=>{
  console.log("conexión a la base de datos realizada con exito");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    })
  }
  )