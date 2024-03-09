export const birthdateValidartion = ({month,year,day}) => {
    const errores = {};

    
     let fechaActual = new Date();
    
     
     let meses = {
         "enero": 0,
         "febrero": 1,
         "marzo": 2,
         "abril": 3,
         "mayo": 4,
         "junio": 5,
         "julio": 6,
         "agosto": 7,
         "septiembre": 8,
         "octubre": 9,
         "noviembre": 10,
         "diciembre": 11
     };
     
     
     let numeroMes = meses[month.toLowerCase()];
 
     
     let fechaNacimiento = new Date(year, numeroMes, day);
     
     
     let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear() - 1;
     
    
     if (fechaActual.getMonth() > fechaNacimiento.getMonth() || 
        (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() >= fechaNacimiento.getDate())) {
         edad++;
     }
 
     if (edad >= 18) {
       errores.birthdate="";
    } else {
       errores.birthdate="La persona es menor de 18 años.";
       
    }
    return errores.birthdate
     
    
}
