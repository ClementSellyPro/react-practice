import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './page/Home';
import DetailPage from './page/DetailPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([47]);
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
                  AppRef={AppRef} 
                />
    },
    {
      path: '/detail',
      element: <DetailPage  
                  countries={countries} 
                  currentCountry={currentCountry} 
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
      {/* <Home countries={countries} setCurrentCountry={setCurrentCountry} AppRef={AppRef} /> */}
      {/* <DetailPage countries={countries} currentCountry={currentCountry} AppRef={AppRef} /> */}
    </div>
  );
}

export default App;
