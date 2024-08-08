import { useContext } from 'react';
import '../style/Score.css';
import SelectionContext from '../context/Selection.context';

function Score(){

    const {score} = useContext(SelectionContext);

    return (
        <div className='Score'>
            <h2 className='Score__title'>SCORE</h2>
            <div className='Score__number'>{score}</div>
        </div>
    );
}

export default Score;