import { useContext } from 'react';
import '../style/InputComponent.css';
import checkedIcon from '../images/icon-check.svg';
import taskContext from '../context/task.context';

function InputComponent(){

    // const [checked, setChecked] = useState(false);
    const {checked, handleCheckClick} = useContext(taskContext)

    // function handleCheckClick(){
    //     setChecked(!checked);
    // }

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