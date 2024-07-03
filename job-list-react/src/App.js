import './App.css';
import FilterBar from './component/FilterBar';
import JobOffer from './component/JobOffer';
import JobList from './component/JobList';
import { useEffect, useState } from 'react';

function App() {

  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('/data.json');
      let fetchedData = await response.text();
      setJobData(fetchedData);
    } 
    fetchData();
  }, []);

  return (
    <div className="App">
      <FilterBar />

      <JobList>
        <JobOffer />

      </JobList>
    </div>
  );
}

export default App;
