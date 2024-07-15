import '../style/Card.css';

function Card(){
    return (
        <div className='Card'>
            <div className='Card__flag' src='{flag}' alt='flag'>FLAG</div>
            <div className='Card__description'>
                <h2 className='Card__description__title'>United States of America</h2>
                <div className='Card__description__details'>
                    <p><strong>Population:</strong> 323,234,000</p>
                    <p><strong>Region:</strong> Americas</p>
                    <p><strong>Capital:</strong> Washington, D.C.</p>
                </div>
            </div>
        </div>
    );
}

export default Card;