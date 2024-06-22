import '../style/InputComponent.css';
import { useContext } from 'react';
import taskContext from '../context/task.context';
import checkedIcon from '../images/icon-check.svg';

function Checkbox(){

    const {checked} = useContext(taskContext);

    function handleClick(e){
        console.log(e);
    }

    return (
        <div onClick={handleClick} className={checked ? 'checkbox checked' : 'checkbox'}> 
            {checked ? <img src={checkedIcon} alt='Checked Icon' /> : null}
        </div>
    );  
}

export default Checkbox;