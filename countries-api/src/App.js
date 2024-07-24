import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './page/Home';
import DetailPage from './page/DetailPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([47]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const AppRef = useRef();

  useEffect(() => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home  
                  countries={countries} 
                  currentCountry={currentCountry} 
                  setCurrentCountry={setCurrentCountry} 
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  AppRef={AppRef} 
                />
    },
    {
      path: '/detail',
      element: <DetailPage  
                  countries={countries} 
                  currentCountry={currentCountry} 
                  selectedRegion={selectedRegion}
                  setSelectedRegion={setSelectedRegion}
                  AppRef={AppRef} 
                />
    },
    {
      path: '*',
      element: <div>error</div>
    }
  ]);

  return (
    <div ref={AppRef} className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
