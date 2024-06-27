import { createContext } from "react";


const taskContext = createContext({
    taskList: [],
    setTaskList: () => {},
    activeTaskList: [],
    setActiveTaskList: () => {}
})

export default taskContext;