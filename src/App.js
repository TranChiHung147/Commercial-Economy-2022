
import './css/style.css';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import Product from './pages/Product';
import News from './pages/News';
import Detail from './pages/Detail';
import Market from './pages/Market';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Navigate, useNavigate  } from 'react-router';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/market" element={<Market />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
