import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"

const initialTeam = [
  { firstName: 'Jesus', lastName: 'Guerrero', email: 'imadethisoneforspam@gmail.com', role: 'Banana' },
  { firstName: 'Johnny', lastName: 'Bravo', email: 'hunk@gmail.com', role: 'Elvis' },
  { firstName: 'Ash', lastName: 'Ketchum', email: 'garysucks@gmail.com', role: 'Worst Trainer' },
  { firstName: 'Jesus', lastName: 'Christ', email: 'Holyone@gmail.com', role: 'Cross man' }
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

        {team.map(member => 
            
            <div key={member.id}>
            {member.firstName}
            _{member.lastName}
            , {member.email}
            , {member.role}
            </div>
         )}
      </header>
    </div>
  );
}

export default App;
