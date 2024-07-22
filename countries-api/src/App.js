import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './page/Home';
import DetailPage from './page/DetailPage';

function App() {

  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(0);
  const AppRef = useRef();

  useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  return (
    <div ref={AppRef} className="App">
      {/* <Home countries={countries} setCurrentCountry={setCurrentCountry} AppRef={AppRef}></Home> */}
      <DetailPage countries={countries} currentCountry={currentCountry} AppRef={AppRef}></DetailPage>
    </div>
  );
}

export default App;
