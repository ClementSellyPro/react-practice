import '../style/Todo.css';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function Todo({task, completed}){
    return (
        <div className='Todo'>
            <div className={completed ? 'todo-checkbox completed-task' : 'todo-checkbox'}>
                { completed ? <FaCheck /> : ''}
            </div>
            <diV className='todo-task'>
                {task}
            </diV>
            <div className='todo-delete-icon'>
                <FaXmark size='1.5em' />
            </div>
        </div>
    )
}

export default Todo;