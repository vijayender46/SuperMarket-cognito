// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
