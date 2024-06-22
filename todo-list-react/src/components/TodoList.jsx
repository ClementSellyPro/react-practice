import { useContext, useState } from 'react';
import '../style/TodoList.css';
import InfoElement from './InfoElement';
import taskContext from '../context/task.context';

import Task from './Task';

function TodoList(){
 
    const [checked, setChecked] = useState(false);
    const [filter, setFilter] = useState('all');

    function handleCheckClick(e){
      setChecked(!checked);
    }

    /*
     * Function to handle the click on the delete icon to delete the right element
    */
    function handleDelete(e){
        let targetElement = e.target.parentElement.parentElement; 
        let targetId = targetElement.dataset.id; 
        console.log(targetId);
    }

    const {taskList} = useContext(taskContext);


    return (
        <div className='TodoList'>
            {taskList.legnth === 0 ?
                <p className='emptyList'>No Task has been added.</p> 
                : 
                taskList.map((element, index) => {
                 return <Task key={index} id={index} handleDelete={handleDelete} >{element}</Task>
                })
            }
            <InfoElement leftItems={taskList.length} filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default TodoList;