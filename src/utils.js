const names = [
  // 2 dentists:
  { name: "Aad", 
    surname: "Groen", 
    gender: "male", 
    region: "Netherlands",
    dentist: true,
    sick: false,
    email: "aadgroen@dentistcompanybvt.com",
    phone: "0612345678",
  },
  {
    name: "Harm van der",
    surname: "Pol",
    gender: "male",
    region: "Netherlands",
    dentist: true,
    sick: false,
    email: "harmvanderpol@dentistcompanybvt.com",
    phone: "0612345678",    
  },
  // 4 assistents:
  { name: "Pieter", 
    surname: "Meijer", 
    gender: "male", 
    region: "Netherlands",
    assistent: true,
    sick: false,
    email: "pietermeijer@dentistcompanybvt.com",
    phone: "0612345678",
  },
  {
    name: "Michiel",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
    assistent: true,
    sick: false,
    email: "michielgerritsen@dentistcompanybvt.com",
    phone: "0612345678",
  }, 
  { name: "Sander van", 
    surname: "Wijk", 
    gender: "male", 
    region: "Netherlands", 
    assistent: true,
    sick: false,
    email: "sandervanwijk@dentistcompanybvt.com",
    phone: "0612345678",
  },
  { name: "Olaf de", 
    surname: "Ruiter", 
    gender: "male", 
    region: "Netherlands", 
    assistent: true,
    sick: false, 
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
    sick: false,
  },
  { 
    name: "Tom", 
    surname: "Schouten", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomschouten@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Mirthe",
    surname: "Meijer",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "mirthemeijer@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Lisa", 
    surname: "Kok", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "lisakok@client.com",
    birthyear: "1982",
    sick: false, 
  },
  { 
    name: "Emiel de", 
    surname: "Vos", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "emieldevos@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Diewertje van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "diewertjevanloon@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Arjan van",
    surname: "Vliet",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "arjanvanvliet@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Femke", 
    surname: "Meijer", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "femkemeijer@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Lonneke",
    surname: "Sanders",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "lonnekesanders@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Christien",
    surname: "Prins",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "christienprins@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Mathijs", 
    surname: "Mol", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "matthijsmol@client.com",
    birthyear: "1982",
    sick: false, 
  },
  { 
    name: "Carlijn", 
    surname: "Bos", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "carlijnbos@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Eelco van der",
    surname: "Meer",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "eelcovandermeer@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Willemijn",
    surname: "Hofman",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnhofman@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Reinout van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "reinoutvanderveen@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Lotte",
    surname: "Hoekstra",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "lottehoekstra@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Aart", 
    surname: "Willems", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "aartwillems@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Florus", 
    surname: "Prins", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "florusprins@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Valentijn",
    surname: "Gerritsen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "valentijngerritsen@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Paul de", 
    surname: "Vos", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "pauldevos@client.com",
    birthyear: "1982",
    sick: false, 
  },
  { 
    name: "Henk", 
    surname: "Postma", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "henkpostma@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Willemijn van",
    surname: "Dijk",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnvandijk@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Boudewijn van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "boudewijnvandijk@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Jaap de", 
    surname: "Ruiter", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "jaapderuiter@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Floor van",
    surname: "Veen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "floorvanveen@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Tom de", 
    surname: "Leeuw", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomdeleeuw@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Heleen van",
    surname: "Loon",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "heleenvanloon@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Luuk", 
    surname: "Hermans", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "luukhermans@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Huib van der",
    surname: "Veen",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "huibvanderveen@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Jaap", 
    surname: "Hoekstra", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "jaaphoekstra@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Mathijs van",
    surname: "Dijk",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "matthijsvandijk@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Peter de",
    surname: "Koning",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "peterdekoning@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Maartje",
    surname: "Schouten",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "maartjeschouten@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Thomas van", 
    surname: "Dam", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "thomasvandam@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Huib", 
    surname: "Verhoeven", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "huibverhoeven@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Imke van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "imkevandongen@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Maartje",
    surname: "Kramer",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "maartjekramer@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Willemijn van",
    surname: "Dongen",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijnvandongen@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Daan",
    surname: "Timmermans",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "daantimmermans@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Tom", 
    surname: "Huisman", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "tomhuisman@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Doortje de",
    surname: "Bruijn",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "doortjedebruijn@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Reinout",
    surname: "Hoekstra",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "reinouthoekstra@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Victor de",
    surname: "Graaf",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "victordegraaf@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Ivo van", 
    surname: "Vliet", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678", 
    email: "ivovanvliet@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Valentijn",
    surname: "Evers",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "valentijnevers@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Imke", 
    surname: "Jansen", 
    gender: "female", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "imkejansen@client.com",
    birthyear: "1982",
    sick: false, 
  },
  {
    name: "Willemijn de",
    surname: "Lange",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "willemijndelange@client.com",
    birthyear: "1982",
    sick: false,
  },
  { 
    name: "Luuk", 
    surname: "Mulder", 
    gender: "male", 
    region: "Netherlands", 
    phone: "0612345678",
    email: "luukmulder@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Stefan",
    surname: "Hendriks",
    gender: "male",
    region: "Netherlands",
    phone: "0612345678",
    email: "stefanhendriks@client.com",
    birthyear: "1982",
    sick: false,
  },
  {
    name: "Leentje",
    surname: "Schouten",
    gender: "female",
    region: "Netherlands",
    phone: "0612345678",
    email: "leentjeschouten@client.com",
    birthyear: "1982",
    sick: false,
  },

];

// console.log('Aantal personen', names.length)

const getRandomName = () => {
  const clientNames = names.filter(name => !name.dentist && !name.assistent ? name : null)
  const person = clientNames[Math.floor(Math.random() * clientNames.length)];
  return `${person.name} ${person.surname}`;
};

const getRandomDentist = () => {
  const dentistNames = names.filter(name => name.dentist ? name : null)
  const person = dentistNames[Math.floor(Math.random() * dentistNames.length)];
  return `${person.name} ${person.surname}`;
}

const getRandomAssistent = () => {
  const assistentNames = names.filter(name => name.assistent ? name : null)
  const person = assistentNames[Math.floor(Math.random() * assistentNames.length)];
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
  assistant: getRandomAssistent(),
});

const generateRandomAppointments = num => {
 
   const allAppointments = []
   // voor nu for loop, tot ik daadwerkelijk toevoeg aan allAppointments
   // anders krijg ik infinite loop. Verander dit later in while loop
  // for (let i = 1; i <= num; i++) {
   while (allAppointments.length < num ) {
    const newAppointment = generateRandomAppointment()
    if (allAppointments.length === 0) { // wanneer nog geen afspraken in array
      allAppointments.push(newAppointment)
    } else if ( allAppointments.length > 0) { // wanneer er al 1 afspraak in de array is, kunnen we checks doen
      // check for double appointments
      let doubleDay = false
      let sameDayAppointments = []
      
      allAppointments.forEach(app => {
        let sameDay = app.day == newAppointment.day
        // console.log(app.day,':', newAppointment.day)
        // console.log('sameDay: ', sameDay)
        // wanneer dag + tijd plus 1 andere conditie waar is, dan is er een dubbele afspraak
        // zelfde dag + tijd + dentist is dubbel, andere dubbels maken niet meer uit
        // zelfde dag + tijd + assistant is dubbel, andere dubbels maken niet meer uit
        // zelfde dag + tijd + patient is dubbel, andere dubbels maken niet meer uit
        if (sameDay) { // nog geen afspraken op deze dag, afspraak mag in de lijst
          doubleDay = true
          sameDayAppointments = allAppointments.filter(app => app.day == newAppointment.day)
          // console.log('doubleDay:', doubleDay)
        } 
        return (doubleDay && sameDayAppointments)
      })
      if (!doubleDay) {
        allAppointments.push(newAppointment)
      } else if (doubleDay) { // reeds andere afspraken op deze dag: check voor dubbele tijden etc...
        let isDouble = false
        // console.log('sameDayAppointments', sameDayAppointments)
        sameDayAppointments.forEach(app => {
          let sameTime = app.time == newAppointment.time
          let sameDentist = app.dentist == newAppointment.dentist
          let sameAssistant = app.assistant == newAppointment.assistant
          let samePatient = app.patient == newAppointment.patient
          // console.group('check for matches, true or false')
          // console.log(app.time,':', newAppointment.time)
          // console.log('sameTime: ', sameTime)
          // console.log(app.dentist,':', newAppointment.dentist)
          // console.log('sameDentist: ', sameDentist)
          // console.log(app.assistant,':', newAppointment.assistant)
          // console.log('sameAssistant: ', sameAssistant)
          // console.log(app.patient,':', newAppointment.patient)
          // console.log('samePatient: ', samePatient)
          // console.groupEnd()
          if (sameTime && (sameDentist | sameAssistant | samePatient)) {
            isDouble = true
            console.log('Dubbele afspraak: ', isDouble)
          } 
          return isDouble
        })
        if (!isDouble) {
          allAppointments.push(newAppointment)
        } else if (isDouble){
          console.log('Dubbele afspraak: ', newAppointment)
        } 
      }   
    }
   }
   //  Array(num)
   //    .fill(0)
   //    .map(_ => generateRandomAppointment());
  //  console.log('aantal afspraken', allAppointments.length)
   return allAppointments
}

console.log(generateRandomAppointments(150))

// Tip via Slack van Stijn de Groot:
 // extra params: dentists, assistants, patients,
// const getAppointments = (num) => {
//   const allAppointments = []
  //Voer het maken van nieuwe appointments uit tot de array lang genoeg is:
  // while (allAppointments.length < num) {
  //   const newAppointment = generateRandomAppointment()
    //Hier logica om de afspraak alleen toe te voegen als hij dus niet ergens dubbel op 'boekt'
    // if (isDoublures(newAppointment, allAppointments) === false) {
    //   allAppointments.push(newAppointment)
      
    // }
//   }
//   return allAppointments
// }
// const allAppointments = getAppointments(150)

// Echter, nu is het aan jou om de isDoublures functie te schrijven:
// const isDoublures = (newAppointment, allAppointments) =>  {

  //logica om de properties van de nieuwe afspraak te checken tegen de bestaande afspraken.
  //Daarvoor kan je bijvoorbeeld .some() , filter(), map() op verschillende manieren gebruiken denk ik
  // return true // or false als totaal resultaat van isDoublures
// }



export default generateRandomAppointments;
