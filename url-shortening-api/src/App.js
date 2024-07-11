import './App.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import Input from './component/Input';
import ResultSection from './component/ResultSection';
import AdvancedStat from './component/AdvancedStat';
import BoostSection from './component/BoostSection';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {

  const [resultList, setResultList] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Input setResultlist={setResultList} />
      <ResultSection resultList={resultList} />
      <AdvancedStat> </AdvancedStat>
      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
