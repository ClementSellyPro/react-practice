import '../style/BigFlag.css';

function BigFlag({currentCountry, currentListedCountries}){

    return (
        <div className='BigFlag'>
            <img src={currentListedCountries[currentCountry].flags.png} alt='flag' />
        </div>
    )
}

export default BigFlag;