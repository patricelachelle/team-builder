import React, { useState, useEffect } from 'react';
import Member from './Member';
import Form from './Form';
import './App.css';
import axios from './axios';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() { 
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const { name, email, role } = formValues
    setMembers([
      ...members,
      {
        name: name.trim(),
        email: email.trim(),
        role: role.trim()
      }
    ])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setMembers(res.data))
  }, [])
  console.log(formValues)
  return (
    <div className="App">
    <h1> Member Form</h1>

    <Form 
      submit={submitForm}
      update={updateForm}
      values={formValues}
    />
    {
      members.map(member => {
        return (
          <Member key={member.id} details={member} />
        )
      })
    }
     
    </div>
  );
}

export default App;
