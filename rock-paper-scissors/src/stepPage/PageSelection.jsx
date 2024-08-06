import { Link } from 'react-router-dom';
import Circle from '../component/Circle';
import backgroundSelection from '../images/bg-triangle.svg';
// pages style regroup in app.css

function PageSelection(){

    return (
        <div className='selection-section '>
            <Link to='/versus' className='one'> <Circle weapon='paper' /> </ Link>
            <Link to='/versus' className='two'> <Circle weapon='scissors' /> </ Link>
            <Link to='/versus' className='three'> <Circle weapon='rock' /> </ Link>
            <img className='background-triangle' src={backgroundSelection} alt='Background Triangle' />
        </div>
    )
}

export default PageSelection;