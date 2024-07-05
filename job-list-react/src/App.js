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
        let languagesList = job.languages;
        let selectedLanguageIndex = null;

        for(let i = 0; i < languagesList.length; i++){
          if(filterList.includes(languagesList[i])){
            selectedLanguageIndex = i;
          }
        }

        let toolsList = job.tools;
        let selectedToolIndex = null

        for(let i = 0; i < toolsList.length; i++){
          if(filterList.includes(toolsList[i])){
            selectedToolIndex = i;
          }
        }

        if(selectedToolIndex !== null){
          return  filterList.includes(job.level) || 
                  filterList.includes(job.role) || 
                  filterList.includes(languagesList[selectedLanguageIndex]) || 
                  filterList.includes(toolsList[selectedToolIndex]);
        }
        if(selectedLanguageIndex !== null){
          return  filterList.includes(job.level) || 
                  filterList.includes(job.role) || 
                  filterList.includes(languagesList[selectedLanguageIndex]);
        }
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
