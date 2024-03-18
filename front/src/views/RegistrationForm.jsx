import NavBar from '../components/NavBar';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { birthdateValidartion } from '../helpers/validateRegistration/birthdateValidartion';
import { nameEmailNdniUsernameValidation } from '../helpers/validateRegistration/nameEmailNdniUsernameValidation';
import { confirmpasswordValidate } from '../helpers/validateRegistration/confirmpasswordValidate';
import { startValidate } from '../helpers/validateRegistration/startValidate';
import { Form, Label, Input, Select, ErrorMessage, Button,Title,BirthdateContainer } from './RegistrationForm.js';


const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState({
    month: months[0],
    year: years[0],
    day: days[0]
  });
  const [nDni, setNDni] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');

  const [errors,setErrors]=useState({
    name:"",
    email:"",
    birthdate:"",
    nDni:"",
    username:"",
    password:""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(!errors.name && !errors.email && !errors.birthdate && !errors.nDni && !errors.username && !errors.password){
      const userData ={
        name:name,
        email:email,
        birthdate:`${birthdate.day}/${birthdate.month}/${birthdate.year}`,
        nDni:nDni,
        username:username,
        password:password

      }
      axios.post('http://localhost:3000/users/register', userData)
      .then(response => {
        alert(
          `username: ${userData.name}
           Registrado con exito
          `)
        
      })
      .catch(error => {
        alert(
          `
          username: ${userData.name}
          Error: ${error.response.data}
          `)
      });

    }else{
      alert(
        `
            Datos Invalidos
        
        `)
    }
   
  }


useEffect(()=>{
    setErrors({...errors,birthdate:birthdateValidartion(birthdate)})
        
},[birthdate])

useEffect(()=>{
 const {namev, emailv, nDniv, usernamev} = nameEmailNdniUsernameValidation(name, email, nDni, username)
 setErrors({...errors,name:namev, email:emailv, nDni:nDniv, username:usernamev})

},[name,email,nDni,username])

useEffect(()=>{
  
  setErrors({...errors,password:confirmpasswordValidate(Confirmpassword,password)})
  
 },[Confirmpassword,password])

 useEffect(()=>{
 
  setErrors({startValidate})
 
 },[])
 


 return (
  <>
  
  <Form onSubmit={handleSubmit}>
    <Title>REGISTER</Title>
    <Label htmlFor="name">Name *:</Label>
    <Input
      type="text"
      id="name"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

    <Label htmlFor="email">Email *:</Label>
    <Input
      type="email"
      id="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
    <Label>Birthdate *:</Label>
    <BirthdateContainer>
      
      <Select
        id="birthdate-month"
        value={birthdate.month}
        onChange={(event) => setBirthdate({ ...birthdate, month: event.target.value })}
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </Select>
      <Select
        id="birthdate-day"
        value={birthdate.day}
        onChange={(event) => setBirthdate({ ...birthdate, day: event.target.value })}
      >
        {days.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </Select>
      <Select
        id="birthdate-year"
        value={birthdate.year}
        onChange={(event) => setBirthdate({ ...birthdate, year: event.target.value })}
      >
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </Select>
    </BirthdateContainer>
    {errors.birthdate && <ErrorMessage>{errors.birthdate}</ErrorMessage>}
    <Label htmlFor="nDni">National ID Number *:</Label>
    <Input
      type="number"
      id="nDni"
      value={nDni}
      onChange={(event) => setNDni(event.target.value)}
    />
    {errors.nDni && <ErrorMessage>{errors.nDni}</ErrorMessage>}

    <Label htmlFor="username">Username *:</Label>
    <Input
      type="text"
      id="username"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
    <Label htmlFor="password">Password *:</Label>
    <Input
      type="password"
      id="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
    <Label htmlFor="Confirmpassword">Confirm password *:</Label>
    <Input
      type="password"
      id="Confirmpassword"
      value={Confirmpassword}
      onChange={(event) => setConfirmpassword(event.target.value)}
    />
    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

    <Button type="submit">Register</Button>
  </Form>
  </>
);
}

export default RegistrationForm;