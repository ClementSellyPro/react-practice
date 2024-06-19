import { useState } from 'react';
import '../style/InputComponent.css';
import checkedIcon from '../images/icon-check.svg';

function InputComponent(){

    const [checked, setChecked] = useState(false);

    function handleCheckClick(){
        setChecked(!checked);
    }

    return (
        <div className='InputComponent'>
            <div className='input-user-section'>
                <div onClick={handleCheckClick} className={checked ? 'checkbox checked' : 'checkbox'}> 
                    {checked ? <img src={checkedIcon} alt='Checked Icon' /> : null}
                </div>
                <input className='input-user' type='text' placeholder='Create a new todo...' />
            </div>
        </div>
    )
}

export default InputComponent;