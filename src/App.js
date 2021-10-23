import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return <div>a</div>;
};

export default App;
