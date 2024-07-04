import './App.css';
import FilterBar from './component/FilterBar';
import JobOffer from './component/JobOffer';
import JobList from './component/JobList';
import { useEffect, useState } from 'react';

function App() {

  const [jobData, setJobData] = useState([]);
  const [displayedJob, setDisplayedJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterList, setFilterList] = useState([]);
  // fetch data from API file
  useEffect(() => {
    const fetchData = async () => {
      try{
        let response = await fetch('/data.json');
        let fetchedData = await response.json();

        setJobData(fetchedData);
      } catch(error){
        console.log(error.message);
      } finally{
        setLoading(false);
      }
    } 
    fetchData();
  }, []);

  useEffect(() => {
    if(filterList.length === 0){
      setDisplayedJob(jobData);
    }else{
      let filteredData = jobData.filter((job) => {
        return filterList.includes(job.level) || filterList.includes(job.role);
      });
      setDisplayedJob(filteredData);
    }
  }, [filterList, jobData]);

  return (
    <div className="App">
      {/* display only when there is filters activated */}
      {filterList.length !== 0 && <FilterBar filterList={filterList} setFilterList={setFilterList}/>}
      
      <JobList>
        {loading ? '... loading' :
          displayedJob.map((job) => {
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
                              featured={job.featured}
                              filterList={filterList}
                              setFilterList={setFilterList}
                    />
          })
        }

      </JobList>
    </div>
  );
}

export default App;
