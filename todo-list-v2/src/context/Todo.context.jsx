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

    const [todoList, setTodoList] = useState([{id:0, task:'Yess yes', completed: false}, {id:1, task:'Pas yess yes', completed: true}]);
    // [{id:0, task:'Yess yes', completed: false}, {id:1, task:'Pas yess yes', completed: true}]
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
