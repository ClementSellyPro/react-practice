import './App.css';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';
import { useMemo, useState } from 'react';
import taskContext from './context/task.context';

function App() {
  
  const [checked, setChecked] = useState(false);
  const [idElement, setIdElement] = useState('');

  function handleCheckClick(e){
    setChecked(!checked);
  }

  const test = useMemo(() => {
    return ['yes', 'no', 'no']
  }, []);

  return (
    <taskContext.Provider value={{
      taskList: test,
      //setTaskList: setTaskList,
      checked: checked,
      setChecked: setChecked,
      handleCheckClick: handleCheckClick,
      idElement: idElement,
      setIdElement: setIdElement
    }}>
      <div className="App">
        <Header />
        <InputComponent />
        <TodoList />
      </div>
    </taskContext.Provider>
  );
}

export default App;
