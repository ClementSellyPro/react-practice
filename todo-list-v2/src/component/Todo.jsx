import { useContext } from 'react';
import '../style/Todo.css';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import TodoContext from '../context/Todo.context';

function Todo({id, task, completed}){

    const {todoList, setTodoList} = useContext(TodoContext);

    // marked a task as completed or not 
    function handleCompletedTask(e){
        let targetTask = e.target.parentElement.dataset.id;
        let updatedList = [...todoList];
        console.log(updatedList[targetTask].completed);
        if(updatedList[targetTask].completed === true){
            updatedList[targetTask].completed = false;
        }else{
            updatedList[targetTask].completed = true;
        }
        setTodoList(updatedList)
    }

    // delete a task
    function handleDeleteTask(e){
        let targetTask = e.target.parentElement.parentElement.dataset.id;
        let updatedList = [...todoList];
        updatedList.splice(targetTask, 1);
        setTodoList(updatedList);
    }

    return (
        <div className='Todo' data-id={id}>
            <div onClick={handleCompletedTask} 
                 className={completed ? 'todo-checkbox completed-task' : 'todo-checkbox'}>
                { completed ? <FaCheck /> : ''}
            </div>
            <div className='todo-task'>
                {task}
            </div>
            <div onClick={handleDeleteTask} className='todo-delete-icon'>
                <FaXmark size='1.5em' />
            </div>
        </div>
    )
}

export default Todo;