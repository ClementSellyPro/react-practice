import { createContext } from "react";


const taskContext = createContext({
    taskList: [],
    setTaskList: () => {},
    checked: false,
    setChecked: () => {},
    handleCheckClick: () => {},
    idElement: '',
    setIdElement: () => {}
})

export default taskContext;