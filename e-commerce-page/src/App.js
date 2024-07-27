import './App.css';
import Header from './components/Header';
import ImageSection from './components/ImageSection';
import ProductDetail from './components/ProductDetail';
import { CartContextProvider} from './context/cart.context';

function App() {

  const currentProduct = {
  brand: 'SNEAKER COMPANY',
  name: 'Fall Limited Edition Sneakers',
  price: 250.00,
  promotion: true,
  discount: 50,
  description: `These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.`,
  amount: 0
  }

  return (
    <CartContextProvider>
      <div className="App">
        <Header />
        <div className='page-content'>
          <ImageSection />
          <ProductDetail currentProduct={currentProduct}/>
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
