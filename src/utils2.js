import store from './store/store'
import { useState, useEffect } from '@hookstate/core'

export const names = [
  // 4 dentists:
  { name: "Aad", 
    surname: "Groen", 
    gender: "male", 
    region: "Netherlands",
    isSick: false,
    email: "aadgroen@dentistcompanybvt.com",
    phone: "0612345678",
    dentist: true,
    id: 1    
  },
  {
    name: "Harm van der",
    surname: "Pol",
    gender: "male",
    region: "Netherlands",
    isSick: false,
    email: "harmvanderpol@dentistcompanybvt.com",
    phone: "0612345678",    
    dentist: true,
    id: 2
  },
  { name: "Pieter", 
    surname: "Meijer", 
    gender: "male", 
    region: "Netherlands",
    isSick: false,
    email: "pietermeijer@dentistcompanybvt.com",
    phone: "0612345678",
    dentist: true,
    id: 3
  },
  {
    name: "Michiel",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
    isSick: false,
    email: "michielgerritsen@dentistcompanybvt.com",
    phone: "0612345678",
    dentist: true,
    id: 4
  }, 
  // 2 assistants
  { name: "Sander van", 
    surname: "Wijk", 
    gender: "male", 
    region: "Netherlands", 
    isSick: false,
    email: "sandervanwijk@dentistcompanybvt.com",
    phone: "0612345678",
    assistant: true,
    id: 5
  },
  { name: "Olaf de", 
    surname: "Ruiter", 
    gender: "male", 
    region: "Netherlands", 
    isSick: false, 
    email: "olafderuiter@dentistcompanybvt.com",
    phone: "0612345678",
    assistant: true,
    id: 6
  },
  // the rest are clients
  { 
    name: "Teun de", 
    surname: "Wit", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "teundewit@client.com",
    birthyear: "1982",
    isSick: false,
    id: 7
  },
  { 
    name: "Tom", 
    surname: "Schouten", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomschouten@client.com",
    birthyear: "1982",
    isSick: false,
    id: 8
  },
  {
    name: "Mirthe",
    surname: "Meijer",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "mirthemeijer@client.com",
    birthyear: "1982",
    isSick: false,
    id: 9
  },
  { 
    name: "Lisa", 
    surname: "Kok", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "lisakok@client.com",
    birthyear: "1982",
    isSick: false,
    id: 10 
  },
  { 
    name: "Emiel de", 
    surname: "Vos", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "emieldevos@client.com",
    birthyear: "1982",
    isSick: false,
    id: 11 
  },
  {
    name: "Diewertje van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "diewertjevanloon@client.com",
    birthyear: "1982",
    isSick: false,
    id: 12
  },
  {
    name: "Arjan van",
    surname: "Vliet",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "arjanvanvliet@client.com",
    birthyear: "1982",
    isSick: false,
    id: 13
  },
  { 
    name: "Femke", 
    surname: "Meijer", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "femkemeijer@client.com",
    birthyear: "1982",
    isSick: false, 
    id: 14
  },
  {
    name: "Lonneke",
    surname: "Sanders",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "lonnekesanders@client.com",
    birthyear: "1982",
    isSick: false,
    id: 15
  },
  {
    name: "Christien",
    surname: "Prins",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "christienprins@client.com",
    birthyear: "1982",
    isSick: false,
    id: 16
  },
  { 
    name: "Mathijs", 
    surname: "Mol", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "matthijsmol@client.com",
    birthyear: "1982",
    isSick: false,
    id: 17 
  },
  { 
    name: "Carlijn", 
    surname: "Bos", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "carlijnbos@client.com",
    birthyear: "1982",
    isSick: false,
    id: 18 
  },
  {
    name: "Eelco van der",
    surname: "Meer",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "eelcovandermeer@client.com",
    birthyear: "1982",
    isSick: false,
    id: 19
  },
  {
    name: "Willemijn",
    surname: "Hofman",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnhofman@client.com",
    birthyear: "1982",
    isSick: false,
    id: 20
  },
  {
    name: "Reinout van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "reinoutvanderveen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 21
  },
  {
    name: "Lotte",
    surname: "Hoekstra",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "lottehoekstra@client.com",
    birthyear: "1982",
    isSick: false,
    id: 22
  },
  { 
    name: "Aart", 
    surname: "Willems", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "aartwillems@client.com",
    birthyear: "1982",
    isSick: false,
    id: 23
  },
  { 
    name: "Florus", 
    surname: "Prins", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "florusprins@client.com",
    birthyear: "1982",
    isSick: false,
    id: 24
  },
  {
    name: "Valentijn",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "valentijngerritsen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 25
  },
  { 
    name: "Paul de", 
    surname: "Vos", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "pauldevos@client.com",
    birthyear: "1982",
    isSick: false,
    id: 26 
  },
  { 
    name: "Henk", 
    surname: "Postma", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "henkpostma@client.com",
    birthyear: "1982",
    isSick: false,
    id: 27
  },
  {
    name: "Willemijn van",
    surname: "Dijk",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnvandijk@client.com",
    birthyear: "1982",
    isSick: false,
    id: 28
  },
  {
    name: "Boudewijn van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "boudewijnvandijk@client.com",
    birthyear: "1982",
    isSick: false,
    id: 29
  },
  { 
    name: "Jaap de", 
    surname: "Ruiter", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "jaapderuiter@client.com",
    birthyear: "1982",
    isSick: false,
    id: 30
  },
  {
    name: "Floor van",
    surname: "Veen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "floorvanveen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 31
  },
  { 
    name: "Tom de", 
    surname: "Leeuw", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomdeleeuw@client.com",
    birthyear: "1982",
    isSick: false,
    id: 32 
  },
  {
    name: "Heleen van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "heleenvanloon@client.com",
    birthyear: "1982",
    isSick: false,
    id: 33
  },
  { 
    name: "Luuk", 
    surname: "Hermans", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "luukhermans@client.com",
    birthyear: "1982",
    isSick: false,
    id: 34 
  },
  {
    name: "Huib van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "huibvanderveen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 35
  },
  { 
    name: "Jaap", 
    surname: "Hoekstra", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "jaaphoekstra@client.com",
    birthyear: "1982",
    isSick: false,
    id: 36
  },
  {
    name: "Mathijs van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "matthijsvandijk@client.com",
    birthyear: "1982",
    isSick: false,
    id: 37
  },
  {
    name: "Peter de",
    surname: "Koning",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "peterdekoning@client.com",
    birthyear: "1982",
    isSick: false,
    id: 38
  },
  {
    name: "Maartje",
    surname: "Schouten",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "maartjeschouten@client.com",
    birthyear: "1982",
    isSick: false,
    id: 39
  },
  { 
    name: "Thomas van", 
    surname: "Dam", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "thomasvandam@client.com",
    birthyear: "1982",
    isSick: false,
    id: 40
  },
  { 
    name: "Huib", 
    surname: "Verhoeven", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "huibverhoeven@client.com",
    birthyear: "1982",
    isSick: false,
    id: 41 
  },
  {
    name: "Imke van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "imkevandongen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 42
  },
  {
    name: "Maartje",
    surname: "Kramer",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "maartjekramer@client.com",
    birthyear: "1982",
    isSick: false,
    id: 43
  },
  {
    name: "Willemijn van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnvandongen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 44
  },
  {
    name: "Daan",
    surname: "Timmermans",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "daantimmermans@client.com",
    birthyear: "1982",
    isSick: false,
    id: 45
  },
  { 
    name: "Tom", 
    surname: "Huisman", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomhuisman@client.com",
    birthyear: "1982",
    isSick: false,
    id: 46 
  },
  {
    name: "Doortje de",
    surname: "Bruijn",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "doortjedebruijn@client.com",
    birthyear: "1982",
    isSick: false,
    id: 47
  },
  {
    name: "Reinout",
    surname: "Hoekstra",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "reinouthoekstra@client.com",
    birthyear: "1982",
    isSick: false,
    id: 48
  },
  {
    name: "Victor de",
    surname: "Graaf",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "victordegraaf@client.com",
    birthyear: "1982",
    isSick: false,
    id: 49
  },
  { 
    name: "Ivo van", 
    surname: "Vliet", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "ivovanvliet@client.com",
    birthyear: "1982",
    isSick: false,
    id: 50
  },
  {
    name: "Valentijn",
    surname: "Evers",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "valentijnevers@client.com",
    birthyear: "1982",
    isSick: false,
    id: 51
  },
  { 
    name: "Imke", 
    surname: "Jansen", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "imkejansen@client.com",
    birthyear: "1982",
    isSick: false,
    id: 52 
  },
  {
    name: "Willemijn de",
    surname: "Lange",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijndelange@client.com",
    birthyear: "1982",
    isSick: false,
    id: 53
  },
  { 
    name: "Luuk", 
    surname: "Mulder", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "luukmulder@client.com",
    birthyear: "1982",
    isSick: false,
    id: 54
  },
  {
    name: "Stefan",
    surname: "Hendriks",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "stefanhendriks@client.com",
    birthyear: "1982",
    isSick: false,
    id: 55
  },
  {
    name: "Leentje",
    surname: "Schouten",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "leentjeschouten@client.com",
    birthyear: "1982",
    isSick: false,
    id: 56
  },

];

export const GetRandomName = () => {
  const clientNames = names.filter(name => (!name.dentist && !name.assistant) && name)
  const person = clientNames[Math.floor(Math.random() * clientNames.length)];
  return `${person.name} ${person.surname}`;
};

const GetRandomDentist = () => {
  const dentistNames = names.filter(name => name.dentist && name)
  const person = dentistNames[Math.floor(Math.random() * dentistNames.length)];
  return `${person.name} ${person.surname}`;
}

const GetRandomAssistant = () => {
  const assistantNames = names.filter(name => name.assistant && name)
  const person = assistantNames[Math.floor(Math.random() * assistantNames.length)];
  return `${person.name} ${person.surname}`;
}

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 20) + 1;

const generateRandomAppointment = () => ({
  day: getRandomDay(),
  time: getRandomTime(),
  patient: GetRandomName(),
  dentist: GetRandomDentist(),
  assistant: GetRandomAssistant(),
});

const checkForSameDayAppointments = (allAppointments, newAppointment) => {
  let doubleDay = false
  let sameDayAppointments = []
  allAppointments.forEach(app => {
    let sameDay = app.day === newAppointment.day
    if (sameDay) { 
      doubleDay = true
      sameDayAppointments = allAppointments.filter(app => app.day === newAppointment.day)
    }
  })
  return ({ doubleDay, sameDayAppointments })
}

const checkForDoubleAppointments = (sameDayAppointments, newAppointment) => {
  let isDouble = false
  sameDayAppointments.forEach(app => {
    let sameTime = app.time === newAppointment.time
    let sameDentist = app.dentist === newAppointment.dentist
    let sameAssistant = app.assistant === newAppointment.assistant
    let samePatient = app.patient === newAppointment.patient
    if (sameTime && (sameDentist | sameAssistant | samePatient)) {
      isDouble = true
    } 
  })
  return isDouble
}


export const giveId = (list) => {
  const isArray = Array.isArray(list)
  let array = []
  if (isArray) {
    for (let id = 1; id <= list.length; id++) {
      list[id - 1].id = id;
    }
  }
  if (typeof list === 'object') {
    for (let day = 1; day <= 20; day++) {
      list[day].forEach(app => {
        array.push(app)
      })
    }
    for (let id = 1; id <= array.length; id++) {
      array[id - 1].id = id;
    }
  }
  return isArray ? list : array
}

export const GenerateRandomAppointments = (num, appointments) => {
  let allAppointments = []
  if (appointments) {
    allAppointments = [...appointments]
  }
  let number = num + allAppointments.length

  while (allAppointments.length < number ) {
    const newAppointment = generateRandomAppointment()
    if (allAppointments.length === 0) { // wanneer nog geen afspraken in de lijst
      allAppointments.push(newAppointment)
    }
    // check of de dag al voorkomt in de lijst
    let  { doubleDay, sameDayAppointments } = checkForSameDayAppointments(allAppointments, newAppointment)
    if (!doubleDay) { // wanneer dag nog niet voorkomt mag de afspraak in de lijst
      allAppointments.push(newAppointment)
    }
    // wanneer de dag al voorkomt, genereer nieuwe lijst van de desbetreffende dag, check voor doubles
    let isDouble = checkForDoubleAppointments(sameDayAppointments, newAppointment)
    if (doubleDay && !isDouble) { // wanneer zelfde dag maar geen dubbele afspraak: toevoegen aan lijst
      allAppointments.push(newAppointment)
    }  
  }
  // const appointments = giveId(allAppointments)
  return allAppointments
}

export const DivideByDay = appointments => {
  const appointmentsByDay = {};
  appointments.forEach(appointment => {
    const day = appointment.day;
    if (!appointmentsByDay.hasOwnProperty(day)) {
      appointmentsByDay[day] = [];
    }
    appointmentsByDay[day].push(appointment) // geprobeerd hier gelijk te sorteren, niet gelukt
    appointmentsByDay[day].sort((a,b) => a.time - b.time); // sort by time
  });
  giveId(appointmentsByDay)
  return appointmentsByDay
};

export const appointments = GenerateRandomAppointments(150)
export const appointmentsByDay = DivideByDay(appointments)