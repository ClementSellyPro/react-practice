import { useEffect, useState } from 'react';
import './App.css';
import Home from './page/Home';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  return (
    <div className="App">
      <Home countries={countries}></Home>
    </div>
  );
}

export default App;
