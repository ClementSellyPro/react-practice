import { useContext, useEffect, useState } from 'react';
import '../style/TodoList.css';
import InfoElement from './InfoElement';
import taskContext from '../context/task.context';

import Task from './Task';

function TodoList(){
 
    const [checked, setChecked] = useState(false);
    const [filter, setFilter] = useState('all');

    const {taskList, setTaskList} = useContext(taskContext);
    const [taskCompletedList, setTaskCompleteList] = useState([]);

    /*
     * Retrieve data from Local Storage
    */
    useEffect(() => {
        let storeTaskList = JSON.parse(localStorage.getItem('taskList'));
        if(storeTaskList){
            setTaskList(storeTaskList);
        }
    }, []);

    /*
     * Function to checked a task and marked as completed
    */
    function handleCheckClick(e){
        let targetElement = e.target.parentElement.innerHTML; 
        // let targetId = targetElement.dataset.id; 
        setChecked(!checked);
        
        let completedTask = taskCompletedList;
        completedTask.push(targetElement);
        setTaskCompleteList(completedTask);
        console.log(completedTask);
    }

    /*
     * Function to handle the click on the delete icon and delete the right element
    */
    function handleDelete(e){
        let targetElement = e.target.parentElement.parentElement; 
        let targetId = targetElement.dataset.id; 
        
        let modifiedTaskList = [];
        for(let i = 0; i < taskList.length; i++){
            if(i !== Number(targetId)){
                modifiedTaskList.push(taskList[i]);
            }
        }
        setTaskList(modifiedTaskList);
        localStorage.setItem('taskList', JSON.stringify(modifiedTaskList));
    }

    return (
        <div className='TodoList'>
            {taskList.legnth === 0 ?
                <p className='emptyList'>No Task has been added.</p> 
                : 
                taskList.map((element, index) => {
                 return <Task key={index} 
                            id={index} 
                            isChecked={  checked} 
                            handleDelete={handleDelete} 
                            handleCheckClick={handleCheckClick}>{element}</Task>
                })
            }
            <InfoElement leftItems={taskList.length} filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default TodoList;