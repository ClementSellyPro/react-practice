import Checkbox from "./Checkbox";
import deleteIcon from '../images/icon-cross.svg'


function Task({children, id, clicked}){
    return (
        <div className='task' data-id={id}>
            <Checkbox clicked={clicked}></Checkbox>
            <div className='task-text'>
                {children}
            </div>
            <div className='delete-icon'>
                <img src={deleteIcon} alt='delete icon' />
            </div>
        </div>
    );
}

export default Task;