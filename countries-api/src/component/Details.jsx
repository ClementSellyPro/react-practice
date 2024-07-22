import '../style/Details.css';

function Details(){
    return (
        <div className='Details'>
            <h1 className='Details_title'>Belgium</h1>
            <div className='Details_details-section'>
                <div className='Details_details-section-left'>
                    <p className='Details_details-text'><strong>Native Name: </strong>Belgiummmm</p>
                    <p className='Details_details-text'><strong>Population: </strong>11.234.456</p>
                    <p className='Details_details-text'><strong>Region: </strong>Europe</p>
                    <p className='Details_details-text'><strong>Sub Region: </strong>Western Europe</p>
                    <p className='Details_details-text'><strong>Capital: </strong>Brussel</p>
                </div>
                <div className='Details_details-section-right'>
                    <p className='Details_details-text'><strong>Top Level Domain: </strong>.be</p>
                    <p className='Details_details-text'><strong>Currencies: </strong>Euro</p>
                    <p className='Details_details-text'><strong>Languages: </strong>Dutch, French, German</p>
                </div>
            </div>
            <div className='Details_border-countries'>
                <strong>Border Countries: </strong>
                <div className='Detail_border-countries-item'>France</div>
                <div className='Detail_border-countries-item'>Germany</div>
                <div className='Detail_border-countries-item'>Netherland</div>
            </div>
        </div>
    )
}

export default Details;