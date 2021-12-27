import React from 'react';
import { useState } from '@hookstate/core'
import store from '../src/store/store'

const AddForm = () => {
    const { namesList, newPerson } = useState(store)

    const persons = [...namesList.get()]
    
    const handleSubmit = (event) => {   
        event.preventDefault()
        const personId = persons.length + 1
        const person = event.target
            
        const addPerson = {
            name: person[0].value,
            surname: person[1].value,
            gender: person[2].checked ? "male" : "female",
            region: person[4].value,
            isSick: false,
            email: person[6].value,
            phone: person[5].value,
            birthyear: person[7].value,
            dentist: person[8].checked ? true : false,
            assistant: person[9].checked ? true : false,
            client: person[10].checked ? true : false,
            id: personId
        }
        
        // persons.push(addPerson)
        namesList.set(p => {
            p.push(addPerson);
            return p;
        })
        newPerson.set({...addPerson})
        const addForm = document.getElementById('addForm')
        addForm.reset()
    }

    return ( 
        <form id="addForm" name="addForm" className="dayview" onSubmit={(event) => handleSubmit(event)}>
        <li className="appointment">  
          <h3 className="patient">Add dentist, assistant or client</h3>  
          <div className="dentist">
              <label htmlFor='name'>Name: </label>
              <div>
                  <input id="name" type="text" required></input>
              </div> 
          </div>
          <div className="dentist">
              <label htmlFor='surname'>Surname: </label>
              <div>
                  <input id="surname" type="text" required></input>
              </div> 
          </div>
          <div className="dentist">
              <label htmlFor='gender'>Gender: </label>
              <div id="gender">
                  <input name="gender" id="male" type="radio" value="male" required></input>
                  <label htmlFor='male'> Male </label>
                  <input name="gender" id="female" type="radio" value="female"/>
                  <label htmlFor='female'> Female </label>
              </div> 
          </div>
          <div className="dentist">
              <label htmlFor='region'>Region: </label>
              <select name="region" id="region" required>
                  <option value="Netherlands" type="text"> Netherlands</option>
                  <option value="Other" type="text"> Other</option>
              </select>
          </div>
          <div className="dentist">
              <label htmlFor='phone'>Phone: </label>
              <div>
                  <input id="phone" type="tel" pattern="[0-9]{10}" placeholder="0612345678" required></input>
              </div> 
          </div>
          <div className="dentist">
              <label htmlFor='email'>Email: </label>
              <div>
                  <input id="email" type="email" required></input>
              </div>
          </div>
          <div className="dentist">
              <label htmlFor='birthyear'>Birthyear: </label>
              <div>
                  <input id="birthyear" type="number" max="2004" min="1900" required></input>
              </div>
          </div>
          <div className="dentist">
              <label htmlFor='choice'> </label>
              <div id="choice">
                  <input name="choice" id="dentist" type="radio" value="dentist" required></input>
                  <label htmlFor='dentist'> Dentist </label>
                  <input name="choice" id="assistant" type="radio" value="assistant"/>
                  <label htmlFor='assistant'> Assistant </label>
                  <input name="choice" id="client" type="radio" value="client"/>
                  <label htmlFor='client'> Client </label>
              </div> 
          </div>
          <div className="patient">
              <button type="submit" className="time">Submit</button>
          </div> 
        </li>
      </form>
    );
}
 
export default AddForm;