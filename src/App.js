import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </>
  );
};

export default App;
