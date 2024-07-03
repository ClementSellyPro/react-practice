import { useState } from 'react';
import '../style/InputComponent.css';
import checkedIcon from '../images/icon-check.svg';

function InputComponent({inputTask, setInputTask, taskList, setTaskList, activeTaskList, setActiveTaskList}){

    const [checked, setChecked] = useState(false);

    function handleCheckClick(){
        setChecked(!checked);
    }

    /*
    * Set the inputTask
    */
    function handleInput(e){
        setInputTask(e.target.value);    
    }

    /*
    * Get the inputTask and reset the input value
    */
    function handleEnterPress(e){
        if(e.key === "Enter"){
            if(e.target.value !== ''){
                let updatedTaskList = [...taskList, inputTask];
                setTaskList(updatedTaskList);
                setActiveTaskList(updatedTaskList);
                setInputTask('');
                localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
                localStorage.setItem('activeTaskList', JSON.stringify(updatedTaskList));
            }
        }
    }
    
    return (
        <div className='InputComponent'>
            <div className='input-user-section'>
                <div onClick={handleCheckClick} className={checked ? 'checkbox checked' : 'checkbox'}> 
                    {checked ? <img src={checkedIcon} alt='Checked Icon' /> : null}
                </div>
                <input onKeyDown={handleEnterPress} onChange={handleInput} value={inputTask} className='input-user' type='text' placeholder='Create a new todo...' />
            </div>
        </div>
    )
}

export default InputComponent;