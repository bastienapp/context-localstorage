import React, { useContext, useState } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';

const PersonCreate = () => {
  const [person, setPerson] = useState({ name: '', email: '' });
  const { personsContext, setPersonsContext } = useContext(PersonContext);

  return (
    <div>
      <label>
        <span>Name:&nbsp;</span>
        <input
          type='text'
          value={person.name}
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
        />
      </label>
      <br />
      <br />
      <label>
        <span>Email:&nbsp;</span>
        <input
          type='email'
          value={person.email}
          onChange={(event) => {
            setPerson({ ...person, email: event.target.value });
          }}
        />
      </label>
      <br />
      <br />
      <input
        type='submit'
        onClick={(event) => {
          event.preventDefault();
          const newPersons = [...personsContext, person];
          localStorage.setItem('personsStorage', JSON.stringify(newPersons));
          setPersonsContext(newPersons);
          setPerson({ name: '', email: '' });
        }}
      />
    </div>
  );
};

export default PersonCreate;
