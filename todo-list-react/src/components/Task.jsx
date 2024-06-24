import Checkbox from "./Checkbox";
import deleteIcon from '../images/icon-cross.svg'


function Task({children, id, handleDelete, handleCheckClick, isChecked}){

    return (
        <div className='task' data-id={id}>
            <Checkbox handleCheckClick={handleCheckClick} isChecked={isChecked}></Checkbox>
            <div className='task-text'>
                {children}
            </div>
            <div onClick={handleDelete} className='delete-icon'>
                <img src={deleteIcon} alt='delete icon' />
            </div>
        </div>
    );
}

export default Task;