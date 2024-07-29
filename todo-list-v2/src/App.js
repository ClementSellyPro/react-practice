import { useRef } from 'react';
import './App.css';
import Header from './component/Header';
import UserInput from './component/UserInput';
import TodoSection from './component/TodoSection';
import { TodoContextProvider } from './context/Todo.context';

function App() {

  const appRef = useRef();

  return (
    <TodoContextProvider>
      <div className="App" ref={appRef}>
        <div className='background-image'> {/* image generate with the css */}</div>
        <div className='App__container'>
          <Header appRef={appRef} />
          <UserInput />
          <TodoSection />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
