import { useContext } from 'react';
import '../style/TodoList.css';
import InfoElement from './InfoElement';
import taskContext from '../context/task.context';

import Task from './Task';

function TodoList(){

    const {taskList} = useContext(taskContext);
    const {idElement} = useContext(taskContext)


    return (
        <div className='TodoList'>
            {taskList.legnth === 0 ?
                <p className='emptyList'>No Task has been added.</p> 
                : 
                taskList.map((element, index) => {
                 return <Task key={index} clicked={idElement === index ? true : false}  id={index}>{element}</Task>
                })
            }
            <InfoElement/>
        </div>
    );
}

export default TodoList;