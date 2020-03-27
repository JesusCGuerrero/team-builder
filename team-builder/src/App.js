import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"

const initialTeam = [
  { firstName: 'Jesus', lastName: 'Guerrero', email: 'IMadeThisOneForSpam@gmail.com', role: 'Super Dad' },
  { firstName: 'Johnny', lastName: 'Bravo', email: 'Hunk@gmail.com', role: 'Elvis Impersonator' },
  { firstName: 'Ash', lastName: 'Ketchum', email: 'GaryOakSucks@gmail.com', role: 'Worst Trainer' },
  { firstName: 'Jesus', lastName: 'Christ', email: 'DontCrossMe@gmail.com', role: 'Holy Man' }
]

function App() {
  const [team, setTeam] = useState(initialTeam);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  })

  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value

    setFormValues({
          ...formValues,
          [inputThatChanged]: newValueForInput,
        })
  }

const empty = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
};

  const onSubmit = (event) => {
    event.preventDefault()
    const newMember = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        role: formValues.role,
      }
      // setTeam([...team, newMember])

      if ((formValues.firstName == Number(formValues.firstName)) || 
        (formValues.lastName == Number(formValues.lastName)) ||
        (formValues.email == Number(formValues.email)) ||
        (formValues.role == Number(formValues.role)))
      {
        setFormValues(empty)
        return alert('No Numbers!')
      } else {
        setTeam([...team, newMember])
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form 
                onInputChange={onInputChange}
                formValues={formValues}
                onSubmit={onSubmit}
        />

        <h2>Team Members:</h2>
        <div className="memberBox">
          {team.map(member => 
            
            <div className="member" key={member.id}>
            
            {`${member.firstName} ${member.lastName}`}
            <br/>
            {member.email}
            <br/>
            {member.role}
            <br/>
            </div>
         )}
         </div>
        
      </header>
    </div>
  );
}

export default App;
