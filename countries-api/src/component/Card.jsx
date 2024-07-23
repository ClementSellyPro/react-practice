import '../style/Card.css';

function Card({id, name, flag, population, region, capital, setCurrentCountry}){

    function handleCardClick(){
        setCurrentCountry(id);
    }

    return (
        <div className='Card' onClick={handleCardClick} data-id={id}>
            <div className='Card__flag-bloc'>
                <img className='Card__flag' src={flag} alt='flag'></img>
            </div>
            <div className='Card__description'>
                <h2 className='Card__description__title'>{name}</h2>
                <div className='Card__description__details'>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;