import { useState } from 'react';
import '../style/TodoList.css';

function TodoList(){

    const [taskList, setTaskList] = useState([]);

    return (
        <div className='TodoList'>
            {taskList.legnth === 0 ?
                <p className='emptyList'>No Task has been added.</p> 
                : 
                taskList.map(element => <p>{element}</p>)
            }
        </div>
    );
}

export default TodoList;