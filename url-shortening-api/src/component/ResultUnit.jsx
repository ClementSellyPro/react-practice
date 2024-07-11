import '../style/ResultUnit.css';

function ResultUnit({link, shortenLink}){
    return (
        <div className='ResultUnit'>
            <div className='original-link'>{link}</div>
            <div className='result-section'>
                <div className='result-link'>{shortenLink}</div>
                <button type='button' className='result-btn'>Copy</button>
            </div>
        </div>
    );
}

export default ResultUnit;