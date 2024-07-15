import Header from '../component/Header';
import FilterSection from '../component/FilterSection';
import CardsContainer from '../component/CardsContainer';
import Card from '../component/Card';

function Home({countries}){
    return (
        <div className="Home">
            <Header />
            <FilterSection />
            <CardsContainer>
                {countries.map((country) => {
                    return <Card 
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