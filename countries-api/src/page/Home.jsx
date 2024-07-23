import { useState } from 'react';
import Header from '../component/Header';
import FilterSection from '../component/FilterSection';
import CardsContainer from '../component/CardsContainer';
import Card from '../component/Card';
import { NavLink } from 'react-router-dom';

function Home({countries, setCurrentCountry, AppRef, selectedRegion, setSelectedRegion}){

    const [inputFilter, setInputFilter] = useState('');

    return (
        <div className="Home">
            <Header AppRef={AppRef} />
            <FilterSection setInputFilter={setInputFilter} setSelectedRegion={setSelectedRegion} />
            <CardsContainer>
                {countries
                .filter((country) => {
                    if(selectedRegion !== 'All'){
                        return country.region === selectedRegion;
                    }else{
                        return true;
                    }
                })
                .filter(country => {
                    return country.name.toLowerCase().includes(inputFilter);
                })
                .map((country, index) => {
                    return <NavLink to='/detail' key={index}><Card 
                        key={index}
                        id={index}
                        name={country.name} 
                        flag={country.flag} 
                        population={country.population}
                        region={country.region} 
                        capital={country.capital}
                        setCurrentCountry={setCurrentCountry}
                        >
                    </Card></NavLink>
                })}
            </CardsContainer>
        </div>
    );
}

export default Home;