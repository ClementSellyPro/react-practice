import '../style/Circle.css';
import paperImage from '../images/icon-paper.svg';
import scissorsImage from '../images/icon-scissors.svg';
import rockImage from '../images/icon-rock.svg';
import { useContext } from 'react';
import SelectionContext from '../context/Selection.context';

function Circle({weapon}){

    const { setSelectedWeapon } = useContext(SelectionContext);

    function handleSelectionWeapon(){
        setSelectedWeapon(weapon);
    }

    return (
        <div onClick={handleSelectionWeapon} className={'Circle ' + weapon}>
            <div className='Circle__background'>
                <img className='Circle__img' src={weapon === 'paper' ? paperImage : weapon === 'scissors' ? scissorsImage : rockImage}
                 alt='Weapon'/>
            </div>
        </div>
    );
}

export default Circle;