import './App.css';
import FilterBar from './component/FilterBar';
import JobOffer from './component/JobOffer';
import JobList from './component/JobList';
import { useEffect, useState } from 'react';

function App() {

  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        let response = await fetch('/data.json');
        let fetchedData = await response.json();

        if(Array.isArray(fetchedData)){
          setJobData(fetchedData);
        }
      } catch(error){
        console.log(error.message);
      } finally{
        setLoading(false);
      }
    } 
    fetchData();
  }, []);

  return (
    <div className="App">
      <FilterBar />
      
      <JobList>
        {loading ? '... loading' :
          jobData.map((job) => {
            return <JobOffer  key={job.id}  
                              company={job.company} 
                              logo={job.logo} 
                              position={job.position} 
                              postAt={job.postedAt} 
                              contract={job.contract} 
                              location={job.location} 
                              role={job.role}
                              level={job.level}
                              languages={job.languages}
                              tools={job.tools} 
                    />
          })
        }

      </JobList>
    </div>
  );
}

export default App;
