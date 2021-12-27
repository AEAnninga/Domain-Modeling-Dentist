import React from 'react';
import { useState } from '@hookstate/core'
import store from '../src/store/store'
import { GenerateRandomAppointments } from './utils2'


const AddAppointment = () => {
    const { namesList, appointmentsList, newPerson, appointmentId, numberOfDay } = useState(store)
    const appointments = appointmentsList.get()
    const persons = namesList.get()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        let id = event.target[0].value
        let isChecked = event.target[1].checked
        let allAppointments = GenerateRandomAppointments(1, appointments)
        let appointment = allAppointments.pop() 
        appointment.id = appointments.length + 1;
        const client = persons[id - 1]
        appointment.patient = `${client.name} ${client.surname}`
        if (isChecked) {
            appointment.assistant = "No assistant available"
        }
        appointmentsList.set(p => {
            p.push(appointment);
            return p;
        })
        appointmentId.set(p => {
            p = appointment.id;
            return p;
        })
        numberOfDay.set(p => {
            p = appointment.day;
            return p;
        })
    }

    return ( 
        <form id="addAppointment" name="addAppointment" className="dayview" onSubmit={(event) => handleSubmit(event)}>
        <li className="appointment">  
          <h3 className="patient">Generate appointment</h3>
          <div className="dentist">
              <label htmlFor='birthyear'>Client id: </label>
              <div>
                  <input id="birthyear" type="number" max={persons.length} min="1" required></input>
              </div>
              <div>
                  <input id="check" type="checkbox"></input>
              <label htmlFor='check'> Without assistant</label>
              </div>
          </div>
          <div className="patient">
              <button type="submit" className="time">Submit</button>
          </div> 
        </li>
      </form>
    );
}
 
export default AddAppointment;