import { createContext, useState } from 'react';

export const PersonContext = createContext(null);

const PersonContextProvider = (props) => {
  const localPersons = localStorage.getItem('personsStorage')
    ? JSON.parse(localStorage.getItem('personsStorage'))
    : [];

  const [personsContext, setPersonsContext] = useState(localPersons);

  return (
    <PersonContext.Provider
      value={{
        personsContext: personsContext,
        setPersonsContext: setPersonsContext,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
