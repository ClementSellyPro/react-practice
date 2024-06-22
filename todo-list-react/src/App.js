import './App.css';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';
import { useMemo, useState } from 'react';
import taskContext from './context/task.context';

function App() {

  const [inputTask, setInputTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const test = useMemo(() => {
    return ['yes', 'no', 'no']
  }, []);

  return (
    <taskContext.Provider value={{
      taskList: taskList,
    }}>
      <div className="App">
        <Header />

        <InputComponent 
        inputTask={inputTask} 
        setInputTask={setInputTask}
        taskList={taskList}
        setTaskList={setTaskList} />

        <TodoList />
      </div>
    </taskContext.Provider>
  );
}

export default App;
