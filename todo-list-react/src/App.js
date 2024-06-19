import './App.css';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <InputComponent />
      <TodoList />
    </div>
  );
}

export default App;
