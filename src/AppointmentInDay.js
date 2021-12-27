import React from "react";
import { Link } from 'react-router-dom'
import { useState } from '@hookstate/core'
import store from '../src/store/store'

const format_time = time => (time < 10 ? `0${time}:00u` : `${time}:00u`);

const AppointmentInDay = ({ time, patient, dentist, assistant, index, idAppointment, day }) => {
  const { appointmentsList, numberOfDay, appointmentId} = useState(store)
  const dayNumber = numberOfDay.get()
  let appointments = appointmentsList.get()
  let appointmentsByDay = appointments.filter(app => app.day === day)
  appointmentsByDay.sort((a,b) => a.time - b.time)
  const appointmentsDay = [...appointmentsList.get()].filter(app => app.day === dayNumber)
  appointmentsDay.sort((a,b) => a.time - b.time)
  const appointmentInDay = appointmentsDay[index]
  
  const handleAppointmentView = (appointment) => {
    const id = appointment.id
    appointmentId.set(id)
  }
  
  const deleteAppointment = id => {
    const appId = appointmentId.get()
    const appToBeDeleted = appointments.filter(app => app.id === id)
    const appIndex = appointments.indexOf(appToBeDeleted[0])
    appointmentsList.set(p => {
      p.splice(appIndex, 1);
      return p;
    })
    if (id === appId) {
      appointmentId.set(p => {
        p = null;
        return p;
      })
    }
  }

  return (
  <li className="appointment">
    <div className="time">{format_time(time)}</div>
    <div className="patient">Patiënt: {patient}</div>
    <div className="dentist">Tandarts: {dentist}</div>
    <div className="assistant">Assistent: {assistant}</div>
    <div className="assistant">Afspraak nummer: {idAppointment}</div>
    <div className="assistant">Dag nummer: {day}</div>
    <div className="assistant" >
      <button className="assistant" onClick={() => handleAppointmentView(appointmentInDay)}>
        <Link to='/appointment'>edit</Link>
      </button>
      <button className="assistant" onClick={() => deleteAppointment(appointmentInDay.id)}>
        verwijder afspraak
      </button>
    </div>
  </li>
  )
};

export default AppointmentInDay
