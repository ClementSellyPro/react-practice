import '../style/InputComponent.css';
// import { useContext } from 'react';
// import taskContext from '../context/task.context';
import checkedIcon from '../images/icon-check.svg';

function Checkbox({handleCheckClick, isChecked}){

    // const {checked} = useContext(taskContext);

    return (
        <div onClick={handleCheckClick} className={isChecked ? 'checkbox checked' : 'checkbox'}> 
            {isChecked ? <img src={checkedIcon} alt='Checked Icon' /> : null}
        </div>
    );  
}

export default Checkbox;