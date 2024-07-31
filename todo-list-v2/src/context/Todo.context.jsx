import { createContext, useState } from "react";

const TodoContext = createContext({
    todoList: [],
    setTodoList: () => {},
    selectedFilter: '',
    setSelectedFilter: () => {}
});

export default TodoContext;

// TodoContext's Provider
export function TodoContextProvider({children}){

    const [todoList, setTodoList] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('All');

    return (
        <TodoContext.Provider value={{
            todoList,
            setTodoList,
            selectedFilter,
            setSelectedFilter
        }}>
            {children}
        </TodoContext.Provider>
    )
}
