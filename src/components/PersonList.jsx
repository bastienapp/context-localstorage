import React, { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContextProvider';

const PersonList = () => {
  const { personsContext } = useContext(PersonContext);

  return (
    <ul>
      {personsContext.map((person, i) => (
        <li key={i}>
          <div>{person.name}</div>
          <div>{person.email}</div>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
