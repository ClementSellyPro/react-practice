import { useContext, useEffect } from 'react';
import '../style/TodoSection.css';
import TodoContext from '../context/Todo.context';
import Todo from './Todo';
import TodoSectionFooter from './TodoSectionFooter';
import useLocalStorage from '../hook/useLocalStorage';

function TodoSection(){

    const {todoList, setTodoList, selectedFilter} = useContext(TodoContext);
    const {getItem} = useLocalStorage('todoListStored');

    useEffect(() => {
        let getTodoList = getItem();
        
        if(getTodoList !== undefined){
            setTodoList(getItem());
        }
    },[]);

    return (
        <div className='TodoSection'>
            {
                todoList.length === 0 ? 
                    <div className='todo-empty'> Add new Todos to display them here </div> 
                    : 
                    todoList
                    .filter(todo => { // filter the todoList according the selectedFilter
                        if(selectedFilter === 'Active'){
                            return !todo.completed;
                        }else if(selectedFilter === 'Completed'){
                            return todo.completed;
                        }else{
                            return todo;
                        }
                    })
                    .map((todo, index) =>{  // display the todoList
                        return <Todo key={index} id={todo.id} task={todo.task} completed={todo.completed} />
                    })
            }

            <TodoSectionFooter />
        </div>
    )
}

export default TodoSection;