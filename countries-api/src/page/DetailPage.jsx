import "../style/DetailPage.css";
import Header from '../component/Header';
import Details from '../component/Details';
import BigFlag from '../component/BigFlag';
import BackButton from "../component/BackButton";

function DetailPage({countries, currentCountry, AppRef, selectedRegion, setSelectedRegion}){

    let currentListedCountries = countries.filter((country) => {
        if(selectedRegion !== 'All'){
            return country.region === selectedRegion;
        }else{
            return true;
        }
    })

    return (
        <div className="DetailPage">
            <Header AppRef={AppRef} />
            <div className='DetailPage-content'>
                <BackButton setSelectedRegion={setSelectedRegion} />
                <BigFlag currentCountry={currentCountry} currentListedCountries={currentListedCountries} />
                <Details currentCountry={currentCountry} currentListedCountries={currentListedCountries} /> 
            </div>
        </div>
    );
}

export default DetailPage;