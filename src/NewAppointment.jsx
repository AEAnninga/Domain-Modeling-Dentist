import React from "react";
import { useState } from '@hookstate/core'
import store from './store/store'
import "./Appointment.css";

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const NewAppointment = () => {
    const { appointmentsList, appointmentId } = useState(store)
    
    const id = appointmentId.get() 
    const allAppointments = [...appointmentsList.get()]
    const appointment = allAppointments.filter(app => app.id === id)
  
    if (!id) {
        return (
            <ul className="dayview">
                <li className="appointment">
                    <h3 className="patient">Generate appointment!</h3>
                </li>
            </ul>
        )
    } else {
        return (
            <ul className="dayview">
                <div className="appointment">
                    <h3 className="patient">New Appointment:</h3> 
                </div>          
                <li className="appointment">
                  <div className="time">{format_time(appointment[0].time)}</div>
                  <div className="patient">Patiënt: {appointment[0].patient}</div>
                  <div className="dentist">Tandarts: {appointment[0].dentist}</div>
                  <div className="assistant">Assistent: {appointment[0].assistant}</div>
                  <div className="assistant">Afspraak nummer: {appointment[0].id}</div>
                  <div className="assistant">Dag nummer: {appointment[0].day}</div>
                </li>
            </ul>
        )   
    }
  
};

export default NewAppointment