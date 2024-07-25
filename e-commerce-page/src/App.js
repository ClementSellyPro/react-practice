import './App.css';
import Header from './components/Header';
import { CartContextProvider } from './context/cart.context';

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <Header />
      </div>
    </CartContextProvider>
  );
}

export default App;
