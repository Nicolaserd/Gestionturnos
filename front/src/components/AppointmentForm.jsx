import axios from 'axios';
import React, { useState } from 'react';
import styles from './AppointmentForm.module.css';
import { useSelector } from 'react-redux';

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointment({ ...appointment, [name]: value });
  };
  const actualUserId = useSelector(state=> state.user.user?.user.id)
  const handleSubmit = (event) => {
    event.preventDefault();
    let appointmentSchedule= {
       ...appointment,
        userId:actualUserId
    }
    console.log(appointmentSchedule)
    axios.post('http://localhost:3000/appointments/schedule', appointmentSchedule)
  .then(response => {
    alert(
        `
        La cita se ha programado exitosamente:
        message: ${response.data.status}
        
        `)
   
  })
  .catch(error => {
    
    alert(
        `
        'Error al programar la cita:' ${error.response.data.error}
        `)
  });
    setAppointment({  date: '', time: '' });
  };

  return (
    <div className={styles.formContainerA}>
      <h1>CREAR CITA</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          required
          className={styles.inputA}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
          required
          className={styles.inputA}
        />

        <button type="submit" className={styles.buttonA}>
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;