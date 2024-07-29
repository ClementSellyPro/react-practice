import { useContext } from 'react';
import '../style/TodoSection.css';
import TodoContext from '../context/Todo.context';
import TodoSectionFooter from './TodoSectionFooter';

function TodoSection(){

    const {todoList} = useContext(TodoContext);

    return (
        <div className='TodoSection'>
            {
                todoList.length === 0 ? 
                    <div className='todo-empty'> Add new Todos to display them here </div> 
                    : 
                    'MAPING THE LIST'
            }

            <TodoSectionFooter />
        </div>
    )
}

export default TodoSection;