import Header from '../component/Header';
import FilterSection from '../component/FilterSection';
import CardsContainer from '../component/CardsContainer';
import Card from '../component/Card';

function Home(){
    return (
        <div className="Home">
            <Header />
            <FilterSection />
            <CardsContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardsContainer>
        </div>
    );
}

export default Home;