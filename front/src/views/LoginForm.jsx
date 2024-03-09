
import React, { useState,useEffect } from 'react';
import { validate } from '../helpers/validate';
import NavBar from '../components/NavBar';
import axios from 'axios';
import styles from './LoginForm.module.css';
const LoginForm = () => {


const [userData, setUserData] = useState({
    username:"",
    password:""
});

const [errors,setErrors]=useState({
    username:"",
    password:""
})
// console.log(userData);

const handleInputChange = (event) =>{

    const{name,value} =event.target
    setUserData({
        ...userData,
        [name]: value
    });
    
   
}


useEffect(()=>{
    
    setErrors(validate(userData))
    
},[userData])
useEffect(()=>{
  const startValidate ={
    username:"",
    password:""
  }
    
  setErrors(startValidate)
  
},[])


const handleOnSubmitLogin =  (event) => {
    event.preventDefault();
    
    if(!errors.username && !errors.password){
       

            axios.post('http://localhost:3000/users/login', userData)
            .then(response => {
              alert(
                `username: ${userData.username}
                 Ingreso con exito
                `)
              
            })
            .catch(error => {
                alert(
                    `username: ${userData.username}
                     Credenciales invalidas ${error.response.data}
                    `)
                
            });

            alert(
                `username: ${userData.username}
                 Enviando datos ....
                `)
         
        
        
        setUserData({
    
            username:"",
            password:""
           
        });
    }else{
        alert(
            `
                Datos Invalidos
                ERROR: ${errors.username?errors.username:""} 
                 ${errors.password?errors.password:""}
            
            `)
    }
}
   

return (
    <>
    <NavBar/>
    <form onSubmit={handleOnSubmitLogin} className={styles.form}>
      <h1 className={styles.form__title}>LOGIN</h1>
      <label className={styles.form__label}>
        Username:
        <input
          type="text"
          value={userData.username}
          name="username"
          placeholder="example"
          className={styles.form__input}
          onChange={handleInputChange}
        />
        {errors.username && <p style={{ color: 'red' }} className={styles.form__error}>{errors.username}</p>}
      </label>
      <label className={styles.form__label}>
        Password:
        <input
          type="password"
          value={userData.password}
          name="password"
          placeholder="**********"
          className={styles.form__input}
          onChange={handleInputChange}
        />
        {errors.password && <p style={{ color: 'red' }} className={styles.form__error}>{errors.password}</p>}
      </label>
      <button type="submit" className={styles.form__button}>
        Login
      </button>
    </form>
    </>
   
);
};

export default LoginForm;