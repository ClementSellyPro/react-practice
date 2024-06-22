import { createContext } from "react";


const taskContext = createContext({
    taskList: [],
    setTaskList: () => {},
})

export default taskContext;