import { useState } from 'react';
import Header from '../component/Header';
import FilterSection from '../component/FilterSection';
import CardsContainer from '../component/CardsContainer';
import Card from '../component/Card';

function Home({countries, AppRef}){

    const [inputFilter, setInputFilter] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');

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
                .map((country, index) => {
                    return <Card 
                        key={index}
                        name={country.name} 
                        flag={country.flag} 
                        population={country.population}
                        region={country.region} 
                        capital={country.capital}>
                    </Card>
                })}
            </CardsContainer>
        </div>
    );
}

export default Home;