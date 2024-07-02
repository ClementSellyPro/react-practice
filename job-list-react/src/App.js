import './App.css';
import FilterBar from './component/FilterBar';
import JobOffer from './component/JobOffer';
import JobList from './component/JobList';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <FilterBar></FilterBar>

      <JobList>
        <JobOffer></JobOffer>

      </JobList>
    </div>
  );
}

export default App;
