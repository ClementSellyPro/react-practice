import { useEffect, useState } from 'react';
import './App.css';
import Home from './page/Home';
import DetailPage from './page/DetailPage';

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
      {/* <DetailPage></DetailPage> */}
    </div>
  );
}

export default App;
