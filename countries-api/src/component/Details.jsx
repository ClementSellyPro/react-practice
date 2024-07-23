import '../style/Details.css';

function Details({currentCountry, currentListedCountries}){


    let languages = currentListedCountries[currentCountry].languages;
    if(languages === undefined){
        languages = [];
    }

    let borders = currentListedCountries[currentCountry].borders;
    if(borders === undefined){
        borders = [];
    }

    let currencies = '';
    if(currencies){
        currencies = currentListedCountries[currentCountry].currencies[0].name;
    }

    return (
        <div className='Details'>
            <h1 className='Details_title'>{currentListedCountries[currentCountry].name}</h1>
            <div className='Details_details-section'>
                <div className='Details_details-section-left'>
                    <p className='Details_details-text'><strong>Native Name: </strong>{currentListedCountries[currentCountry].nativeName}</p>
                    <p className='Details_details-text'><strong>Population: </strong>{currentListedCountries[currentCountry].population}</p>
                    <p className='Details_details-text'><strong>Region: </strong>{currentListedCountries[currentCountry].region}</p>
                    <p className='Details_details-text'><strong>Sub Region: </strong>{currentListedCountries[currentCountry].subregion}</p>
                    <p className='Details_details-text'><strong>Capital: </strong>{currentListedCountries[currentCountry].capital}</p>
                </div>
                <div className='Details_details-section-right'>
                    <p className='Details_details-text'><strong>Top Level Domain: </strong>{currentListedCountries[currentCountry].topLevelDomain}</p>
                    <p className='Details_details-text'><strong>Currencies: </strong>{currencies}</p>
                    <p className='Details_details-text'><strong>Languages: </strong>{
                        languages.map((language, index) => {
                            if(index === languages.length - 1){
                                return language.name;
                            }else{
                                return language.name + ', ';
                            }
                        })
                    }</p>
                </div>
            </div>
            <div className='Details_border-countries'>
                <strong>Border Countries: </strong>
                {
                    borders.map((border, index) => {
                        return <div key={index} className='Detail_border-countries-item'>{border}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Details;