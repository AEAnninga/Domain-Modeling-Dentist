import React from "react";
import { Link } from 'react-router-dom'
import AppointmentInMonth from "./AppointmentInMonth";
import { useState } from '@hookstate/core'
import store from '../src/store/store'

const DayInMonth = ({ appointments }) => {
  const { numberOfDay } = useState(store)
  
  const handleDayView = appointmentsDay => {
    const dayNumber = appointmentsDay[0].day
    numberOfDay.set(dayNumber)
  }  

  const appointmentsJSX = appointments.map(({ time, patient }, index) => (
    <AppointmentInMonth time={time} patient={patient} key={index} />
  ));
  return (
    <div className="day">
      {appointmentsJSX}
      <br/>
      <button className="day" onClick={() => handleDayView(appointments)}>
        <Link to="/day">edit day</Link>
      </button>
    </div>

  )
};

export default DayInMonth
