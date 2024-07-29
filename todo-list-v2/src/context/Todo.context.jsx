import { createContext, useState } from "react";


const TodoContext = createContext({
    todoList: [],
    setTodoList: () => {}
});

export default TodoContext;

export function TodoContextProvider({children}){

    const [todoList, setTodoList] = useState([]);

    return (
        <TodoContext.Provider value={{
            todoList,
            setTodoList
        }}>
            {children}
        </TodoContext.Provider>
    )
}
