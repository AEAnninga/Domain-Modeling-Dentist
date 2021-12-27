import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";
import { useState } from '@hookstate/core'
import store from '../src/store/store'

const Day = () => {
  const { appointmentsList, numberOfDay } = useState(store)
  const appointments = [...appointmentsList.get()]
  const dayNumber = numberOfDay.get()
  const appointmentsDay = appointments.filter(app => app.day === dayNumber)
  appointmentsDay.sort((a,b) => a.time - b.time) // sort() mutates original array or this
  // because sort() mutates the original array, initialising new const not necessary
  const appointmentsJSX = appointmentsDay.map(
    ({ time, patient, dentist, assistant, id, day }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        idAppointment={id}
        day={day}
        index={index}
        key={index}
      />
    )
  );
  return (
    <ul className="dayview">
      <div className="dayview">
        <button disabled={dayNumber <= 1 ? true : false} onClick={() => numberOfDay.set(p => p - 1)} className="dentist">previous day</button>
        <button disabled={dayNumber >= 20 ? true : false} onClick={() => numberOfDay.set(p => p + 1)} className="dentist">next day</button>
      </div>
      {appointmentsJSX}
      <div className="dayview">
        <button disabled={dayNumber <= 1 ? true : false} onClick={() => numberOfDay.set(p => p - 1)} className="dentist">previous day</button>
        <button disabled={dayNumber >= 20 ? true : false} onClick={() => numberOfDay.set(p => p + 1)} className="dentist">next day</button>
      </div>      
    </ul>

  )
};

export default Day