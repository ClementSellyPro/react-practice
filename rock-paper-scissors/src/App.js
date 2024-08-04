import './App.css';
import Header from './component/Header';
import PageSelection from './stepPage/PageSelection';
import RulesButton from './component/RulesButton';
import Rules from './component/Rules';
import { useContext, useRef, useState } from 'react';
import SelectionContext, { SelectionContextProvider } from './context/Selection.context';

function App() {

  const { SetSelectedWeapon } = useContext(SelectionContext);
  const [isRulesActive, setIsRulesActive] = useState(false);
  const rulesRef = useRef();  // ref to click outside the rules box

  return (
    <SelectionContextProvider>
      <div className="App">
        <Header />
        <div className='App__content'>

          <PageSelection SetSelectedWeapon={SetSelectedWeapon} />

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
