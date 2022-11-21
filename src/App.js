import Home from './pages/Home';
import Showroom from './pages/Showroom';
import Product from './pages/Product';
import News from './pages/News';
import Detail from './pages/Detail';
import Market from './pages/Market';
import Warranty from './pages/Warranty';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Compare from './components/Compare';

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
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
