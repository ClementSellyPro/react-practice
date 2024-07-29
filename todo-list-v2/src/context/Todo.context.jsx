import { createContext, useState } from "react";


const TodoContext = createContext({
    todoList: [],
    setTodoList: () => {}
});

export default TodoContext;

export function TodoContextProvider({children}){

    const [todoList, setTodoList] = useState([{id:0, task:'Yess yes', completed: false}, {id:1, task:'Pas yess yes', completed: true}]);

    return (
        <TodoContext.Provider value={{
            todoList,
            setTodoList
        }}>
            {children}
        </TodoContext.Provider>
    )
}
