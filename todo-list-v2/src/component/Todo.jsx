import { useContext } from 'react';
import '../style/Todo.css';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import TodoContext from '../context/Todo.context';
import useLocalStorage from '../hook/useLocalStorage';

function Todo({id, task, completed}){

    const {todoList, setTodoList} = useContext(TodoContext);
    const {setItem} = useLocalStorage('todoListStored');

    // marked a task as completed or not 
    function handleCompletedTask(e){
        let target = e.target;
        let targetTask;
        let updatedList = [...todoList];
        // get the target id according the target cliked (div, svg, path)
        if(target.classList.contains('todo-checkbox')){
            targetTask = e.target.parentElement.dataset.id;
        }else if(target.tagName === 'svg'){
            targetTask = e.target.parentElement.parentElement.dataset.id;
        }else if(target.tagName === 'path'){
            targetTask = e.target.parentElement.parentElement.parentElement.dataset.id;
        }
        // marked as complete or not according the target id
        for(let i = 0; i < updatedList.length; i++){
            if(updatedList[i].id === Number(targetTask)){
                if(updatedList[i].completed === true){
                    updatedList[i].completed = false;
                }else{
                    updatedList[i].completed = true;
                }
            }
        }

        setTodoList(updatedList);
        setItem(updatedList);
    }

    // delete a task
    function handleDeleteTask(e){
        let target = e.target;
        let targetTask;
        // get the target id according the target cliked (div, svg, path)
        if(target.classList.contains('todo-delete-icon')){
            targetTask = e.target.parentElement.dataset.id;
        }else if(target.tagName === 'svg'){
            targetTask = e.target.parentElement.parentElement.dataset.id;
        }else if(target.tagName === 'path'){
            targetTask = e.target.parentElement.parentElement.parentElement.dataset.id;
        }
        
        let updatedList = [...todoList].filter(todo => {
            return todo.id !== Number(targetTask);
        });

        setTodoList(updatedList);
        setItem(updatedList);
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