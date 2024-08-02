import './App.css';
import Header from './component/Header';
import Circle from './component/Circle';
import RulesButton from './component/RulesButton';
import Rules from './component/Rules';
import { useState } from 'react';

function App() {

  const [isRulesActive, setIsRulesActive] = useState(false);

  return (
    <div className="App">
      <Header />
      <Circle />

      <RulesButton isRulesActive={isRulesActive} setIsRulesActive={setIsRulesActive} />
      { 
        isRulesActive ? 
        <Rules isRulesActive={isRulesActive} setIsRulesActive={setIsRulesActive} /> 
        : 
        null
      }
    </div>
  );
}

export default App;
