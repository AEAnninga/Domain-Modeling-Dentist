import React from "react";
import "./Calendar.css";
import DayInMonth from "./DayInMonth";
import { useState } from '@hookstate/core'
import store from '../src/store/store'


const Calendar = () => {
  const { appointmentsList } = useState(store)
  const appointments = [...appointmentsList.get()]
  
  const getApps = appointments => {
    let allAppointments = []
    for (let day = 1; day <= 20; day++) {
      let array = appointments.filter(app => app.day === day)
      array.sort((a, b) => a.time - b.time)
      allAppointments.push(array)
    }
    allAppointments.sort((a,b) => a.day - b.day);
    return allAppointments
  }

  const appointmentsCalendar = getApps(appointments)
  
  const daysInMonthJSX = Object.values(
    appointmentsCalendar
  ).map((appointmentsInDay, index) => (
    <DayInMonth appointments={appointmentsInDay} key={index} />
  ));

  return (
    <div className="calendarview">
      <div className="header">
        <div>Maandag</div>
        <div>Dinsdag</div>
        <div>Woensdag</div>
        <div>Donderdag</div>
        <div>Vrijdag</div>
      </div>
      <div className="table">{daysInMonthJSX}</div>
    </div>
  );
};

export default Calendar
