import './App.css';
import Header from './component/Header';
import PageSelection from './stepPage/PageSelection';
import PageVersus from './stepPage/PageVersus';
import RulesButton from './component/RulesButton';
import Rules from './component/Rules';
import { useContext, useRef, useState } from 'react';
import SelectionContext, { SelectionContextProvider } from './context/Selection.context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const { SetSelectedWeapon } = useContext(SelectionContext);
  const [isRulesActive, setIsRulesActive] = useState(false);
  const rulesRef = useRef();  // ref to click outside the rules box

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageSelection SetSelectedWeapon={SetSelectedWeapon} />,
    },
    {
      path: '/versus',
      element: <PageVersus />
    }
  ]);

  return (
    <SelectionContextProvider>
      <div className="App">
        <Header />
        <div className='App__content'>

          <RouterProvider router={router} />

        </div>
      </div>

      {/* Button to display the rules */}
      <RulesButton setIsRulesActive={setIsRulesActive} />
      { 
          isRulesActive ? 
          <Rules rulesRef={rulesRef} setIsRulesActive={setIsRulesActive} /> 
          : 
          null
      }
    </SelectionContextProvider>
  );
}

export default App;
