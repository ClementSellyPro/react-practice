import Circle from '../component/Circle';
import backgroundSelection from '../images/bg-triangle.svg';

function PageSelection(){
    return (
        <>
            <div className='selection-section '>
            <Circle weapon='paper' />
            <Circle weapon='scissors' />
            <Circle weapon='rock' />
            <img className='background-triangle' src={backgroundSelection} alt='Background Triangle' />
            </div>
        </>
    )
}

export default PageSelection;