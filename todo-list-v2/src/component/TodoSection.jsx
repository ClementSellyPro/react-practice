import { useContext } from 'react';
import '../style/TodoSection.css';
import TodoContext from '../context/Todo.context';
import Todo from './Todo';
import TodoSectionFooter from './TodoSectionFooter';

function TodoSection(){

    const {todoList} = useContext(TodoContext);

    return (
        <div className='TodoSection'>
            {
                todoList.length === 0 ? 
                    <div className='todo-empty'> Add new Todos to display them here </div> 
                    : 
                    todoList.map((todo, index) =>{
                        return <Todo key={index} id={todo.id} task={todo.task} completed={todo.completed} />
                    })
            }

            <TodoSectionFooter />
        </div>
    )
}

export default TodoSection;