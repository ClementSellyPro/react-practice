import '../style/Details.css';

function Details({countries, currentCountry}){

    let languages = countries[currentCountry].languages;
    let borders = countries[currentCountry].borders;

    return (
        <div className='Details'>
            <h1 className='Details_title'>{countries[currentCountry].name}</h1>
            <div className='Details_details-section'>
                <div className='Details_details-section-left'>
                    <p className='Details_details-text'><strong>Native Name: </strong>{countries[currentCountry].nativeName}</p>
                    <p className='Details_details-text'><strong>Population: </strong>{countries[currentCountry].population}</p>
                    <p className='Details_details-text'><strong>Region: </strong>{countries[currentCountry].region}</p>
                    <p className='Details_details-text'><strong>Sub Region: </strong>{countries[currentCountry].subregion}</p>
                    <p className='Details_details-text'><strong>Capital: </strong>{countries[currentCountry].capital}</p>
                </div>
                <div className='Details_details-section-right'>
                    <p className='Details_details-text'><strong>Top Level Domain: </strong>{countries[currentCountry].topLevelDomain}</p>
                    <p className='Details_details-text'><strong>Currencies: </strong>{countries[currentCountry].currencies.name}</p>
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
                {/* <div className='Detail_border-countries-item'>France</div>
                <div className='Detail_border-countries-item'>Germany</div>
                <div className='Detail_border-countries-item'>Netherland</div> */}
            </div>
        </div>
    )
}

export default Details;