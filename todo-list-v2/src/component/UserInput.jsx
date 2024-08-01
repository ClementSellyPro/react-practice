import { useContext, useMemo, useState } from 'react';
import '../style/UserInput.css';
import TodoContext from '../context/Todo.context';
import useLocalStorage from '../hook/useLocalStorage';

function UserInput(){

    const {todoList, setTodoList} = useContext(TodoContext);
    const [input, setInput] = useState('');
    const {setItem} = useLocalStorage('todoListStored');

    const randomInt = useMemo(() => {
        return Math.floor(Math.random() * 10000000);
    }, [todoList]);

    // set the input state with the user input
    function handleInput(e){
        let currentInput = e.target.value;
        setInput(currentInput);
    }

    // Add the new task to todoList pressing Entrer key
    function handleAddTask(e){
        let keyPressed = e.key;
        // let newIdTask = todoList.length;
        let newTask = {id:randomInt, task:input, completed: false};
        if(keyPressed === 'Enter' && input !== ''){
            setTodoList([...todoList, newTask]);
            setItem([...todoList, newTask]);
            setInput('');
        }
    }

    return (
        <div className='UserInput'>
            <input value={input} onChange={handleInput} onKeyDown={handleAddTask} type='text' placeholder='Create a new todo...' />
        </div>
    )
}

export default UserInput;