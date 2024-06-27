import { useContext, useEffect, useState } from 'react';
import '../style/TodoList.css';
import InfoElement from './InfoElement';
import taskContext from '../context/task.context';

import Task from './Task';

function TodoList(){
 
    const [checked, setChecked] = useState(false);
    const [filter, setFilter] = useState('All');

    const {taskList, setTaskList} = useContext(taskContext);
    const {activeTaskList, setActiveTaskList} = useContext(taskContext);
    const [completedTaskList, setCompletedTaskList] = useState([]);
    
    /*
     * Retrieve data from Local Storage
    */
    useEffect(() => {
        let storeTaskList = JSON.parse(localStorage.getItem('taskList'));
        if(storeTaskList){
            setTaskList(storeTaskList);
        }
        let storeActiveTask = JSON.parse(localStorage.getItem('activeTaskList'));
        if(storeActiveTask){
            setActiveTaskList(storeActiveTask);
        }
        let storeCompletedTask = JSON.parse(localStorage.getItem('completedTaskList'));
        if(storeCompletedTask){
            setCompletedTaskList(storeCompletedTask);
        }
    }, []);

    // update the active task list
    useEffect(() => {
        let activeTask = taskList.filter((element) =>{
                return !completedTaskList.includes(element);
        });
        setActiveTaskList(activeTask);
    }, [completedTaskList]);

    /*
     * Function to checked a task and marked as completed
    */
    function handleCheckClick(e){
        let targetElement = e.target.nextSibling.innerHTML; 
        setChecked(!checked);
        // fill the completed task list
        let completedTask = [...completedTaskList];
        completedTask.push(targetElement);
        setCompletedTaskList(completedTask);
        // store completed task
        localStorage.setItem('completedTaskList', JSON.stringify(completedTask));
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

    /*
     * Render task list
    taskList.length === 0 ?
                <p className='emptyList'>No Task has been added.</p> 
                : 
    */
   function renderTaskList(taskList){
    return (
        taskList.map((element, index) => {
            return(
            <Task key={index} 
                id={index} 
                isChecked={checked} 
                handleDelete={handleDelete} 
                handleCheckClick={handleCheckClick}
            >
                {element}
            </Task>
        )})
    );
   }

    return (
        <div className='TodoList'>
            {filter === 'All' && renderTaskList(taskList)}
            
            {filter === 'Active' && renderTaskList(activeTaskList)}

            {filter === 'Completed' && renderTaskList(completedTaskList)}


            <InfoElement leftItems={taskList.length} setFilter={setFilter} />
        </div>
    );
}

export default TodoList;