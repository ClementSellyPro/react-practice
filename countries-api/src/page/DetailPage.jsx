import "../style/DetailPage.css";
import Header from '../component/Header';
import Details from '../component/Details';
import BigFlag from '../component/BigFlag';
import BackButton from "../component/BackButton";

function DetailPage({countries, currentCountry, AppRef}){
    return (
        <div className="DetailPage">
            <Header AppRef={AppRef} />
            <div className='DetailPage-content'>
                <BackButton />
                <BigFlag countries={countries} currentCountry={currentCountry} />
                <Details countries={countries} currentCountry={currentCountry} /> 
            </div>
        </div>
    );
}

export default DetailPage;