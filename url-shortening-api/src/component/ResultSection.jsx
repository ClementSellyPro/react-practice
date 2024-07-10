import '../style/ResultSection.css';
import ResultUnit from './ResultUnit';


function ResultSection(){
    return (
        <div className='ResultSection'>
            <ResultUnit />
            <ResultUnit />
            <ResultUnit />
        </div>
    );
}

export default ResultSection;