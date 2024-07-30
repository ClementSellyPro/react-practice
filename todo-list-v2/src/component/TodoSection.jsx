import { useContext } from 'react';
import '../style/TodoSection.css';
import TodoContext from '../context/Todo.context';
import Todo from './Todo';
import TodoSectionFooter from './TodoSectionFooter';

function TodoSection(){

    const {todoList, selectedFilter} = useContext(TodoContext);

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