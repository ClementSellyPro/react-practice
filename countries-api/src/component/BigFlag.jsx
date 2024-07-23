import '../style/BigFlag.css';

function BigFlag({countries, currentCountry}){

    return (
        <div className='BigFlag'>
            <img src={countries[currentCountry].flags.png} alt='flag' />
        </div>
    )
}

export default BigFlag;