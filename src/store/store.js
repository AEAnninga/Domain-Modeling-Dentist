import { createState, useState } from '@hookstate/core'
import { names, appointments, appointmentsByDay} from '../utils2'

const store = createState({
    namesList: [...names],
    appointmentsList: appointments,
    appointmentsListByDay: appointmentsByDay,
    numberOfDay: 1,
    appointmentId: null,
    newPerson: {},  
})

export default store