const names = [
  // 4 dentists:
  { name: "Aad", 
    surname: "Groen", 
    gender: "male", 
    region: "Netherlands",
    dentist: true,
    isSick: false,
    email: "aadgroen@dentistcompanybvt.com",
    phone: "0612345678",
  },
  {
    name: "Harm van der",
    surname: "Pol",
    gender: "male",
    region: "Netherlands",
    dentist: true,
    isSick: false,
    email: "harmvanderpol@dentistcompanybvt.com",
    phone: "0612345678",    
  },
  { name: "Pieter", 
    surname: "Meijer", 
    gender: "male", 
    region: "Netherlands",
    dentist: true,
    isSick: false,
    email: "pietermeijer@dentistcompanybvt.com",
    phone: "0612345678",
  },
  {
    name: "Michiel",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
    dentist: true,
    isSick: false,
    email: "michielgerritsen@dentistcompanybvt.com",
    phone: "0612345678",
  }, 
  // 2 assistants
  { name: "Sander van", 
    surname: "Wijk", 
    gender: "male", 
    region: "Netherlands", 
    assistant: true,
    isSick: false,
    email: "sandervanwijk@dentistcompanybvt.com",
    phone: "0612345678",
  },
  { name: "Olaf de", 
    surname: "Ruiter", 
    gender: "male", 
    region: "Netherlands", 
    assistant: true,
    isSick: false, 
    email: "olafderuiter@dentistcompanybvt.com",
    phone: "0612345678",
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
  },

];

// console.log('Aantal personen', names.length)

const getRandomName = () => {
  const clientNames = names.filter(name => (!name.dentist && !name.assistant) && name)
  const person = clientNames[Math.floor(Math.random() * clientNames.length)];
  return `${person.name} ${person.surname}`;
};

const getRandomDentist = () => {
  const dentistNames = names.filter(name => name.dentist && name)
  const person = dentistNames[Math.floor(Math.random() * dentistNames.length)];
  return `${person.name} ${person.surname}`;
}

const getRandomAssistant = () => {
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
  patient: getRandomName(),
  dentist: getRandomDentist(),
  assistant: getRandomAssistant(),
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
  const checks = { doubleDay, sameDayAppointments }
  return (checks)
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
      console.log('Dubbele afspraak: ', isDouble)
    } 
  })
  return isDouble
}

export const generateRandomAppointments = num => {
  const allAppointments = []

  while (allAppointments.length < num ) {
    const newAppointment = generateRandomAppointment()
    if (allAppointments.length === 0) { // wanneer nog geen afspraken in array
      allAppointments.push(newAppointment)
    }

    let  { doubleDay, sameDayAppointments } = checkForSameDayAppointments(allAppointments, newAppointment)
    if (!doubleDay) {
      allAppointments.push(newAppointment)
    } else if (doubleDay) { 

      let isDouble = checkForDoubleAppointments(sameDayAppointments, newAppointment)
      if (!isDouble) {
        allAppointments.push(newAppointment)
      } else if (isDouble){
        console.log('Dubbele afspraak: ', newAppointment)
      } 
    }  
  }
  console.log('Aantal afspraken: ', allAppointments.length)
  return allAppointments
}

const appointments = generateRandomAppointments(150)

console.log(appointments)



