import './App.css';
import Header from './component/Header';
import PageSelection from './stepPage/PageSelection';
import RulesButton from './component/RulesButton';
import Rules from './component/Rules';
import { useRef, useState } from 'react';

function App() {

  const [isRulesActive, setIsRulesActive] = useState(false);
  const rulesRef = useRef();

  

  return (
    <>
    <div className="App">
      <Header />
      <div className='App__content'>

        <PageSelection />

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
    </>
  );
}

export default App;
