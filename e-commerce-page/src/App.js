import './App.css';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import { CartContextProvider } from './context/cart.context';

function App() {

  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <ImageSection />
      </div>
    </CartContextProvider>
  );
}

export default App;
