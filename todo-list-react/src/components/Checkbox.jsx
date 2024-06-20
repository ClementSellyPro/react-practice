import '../style/InputComponent.css';
import { useContext } from 'react';
import taskContext from '../context/task.context';
import checkedIcon from '../images/icon-check.svg';

function Checkbox({clicked}){
    const {checked} = useContext(taskContext);
    const {setIdElement} = useContext(taskContext);

    function getElement(e){
        let idElement = e.target.parentElement.dataset.id;
        setIdElement(idElement);
    }

    return (
        <div onClick={getElement} className={checked && clicked ? 'checkbox checked' : 'checkbox'}> 
            {checked && clicked ? <img src={checkedIcon} alt='Checked Icon' /> : null}
        </div>
    );  
}

export default Checkbox;