import PersonCreate from './components/PersonCreate';
import PersonList from './components/PersonList';
import PersonContextProvider from './contexts/PersonContextProvider';

function App() {
  return (
    <div className='App'>
      <PersonContextProvider>
        <PersonCreate />
        <PersonList />
      </PersonContextProvider>
    </div>
  );
}

export default App;
