import logo from './components/img/icon.png';
import call from './components/icon-font/call-outline.svg';
import cart from './components/icon-font/cart-outline.svg';
import search from './components/icon-font/search-outline.svg';
import chevronForward from './components/icon-font/chevron-forward-outline.svg';
import logoFacebook from './components/icon-font/logo-facebook.svg';
import zalo from './components/img/zalo-icon.png';
import gmail from './components/img/gmail_icon.png';
import footer from './components/img/footer_note.png';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Market from './screens/Market.js';
import './App.css';
import Detail from './screens/Detail';
import All_product from './screens/All_products';
import Index from './screens/Index';
import News from './screens/News';
import Showroom from './screens/Showroom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <header className="header">
      <div className="header-logo">
        <div className="header-logo-img button-hover">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-logo-text button-hover">BK ROBOTIC</div>
      </div>
      <ul className="header-slider">
        <li className="header-slider-item"><a href={'/'}>Trang chủ</a></li>
        <li className="header-slider-item"><a href={'/all_products'}>Sản phẩm</a></li>
        <li className="header-slider-item"><a href={'/showroom'}>Show room</a></li>
        <li className="header-slider-item"><a href={'/news'}>Tin tức</a></li>
        <li className="header-slider-item">Bảo hành</li>
      </ul>
      <div className="header-icon">
        <img
          className="header-icon-item button-hover"
          name="call-outline"
          src={call}
        ></img>
        <img
          className="header-icon-item button-hover"
          name="cart-outline"
          src={cart}
        ></img>
        <a href="/index"><img
          className="header-icon-item button-hover"
          name="search-outline"
          src={search}
        ></img></a>
      </div>
      </header>

      <main className="main">
          <div className="content">
            <Routes>
                <Route path="/" exact={true} element={<Market/>} />
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/all_products" element={<All_product/>}/>
                <Route path="/index" element={<Index/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/showroom" element={<Showroom/>}/>
            </Routes> 
          </div>
      </main>

      <footer className="footer">
        <div className="footer-heading">HOTLINE: 0938298999 - 0903770999</div>
        <div className="footer-content">
        <div className="FC-item">
          <ul className="FCi-list">
            <div className="FCi-name">Giới thiệu</div>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Về chúng tôi
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Show room
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Tin tức
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Liên hệ
            </li>
          </ul>
        </div>

        <div className="FC-item">
          <ul className="FCi-list">
            <div className="FCi-name">Chính sách</div>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách bảo hành
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách vận chuyển
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách thanh toán
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách đổi trả
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách bảo mật
            </li>
          </ul>
        </div>

        <div className="FC-item">
          <ul className="FCi-list">
            <div className="FCi-name">Tin tức</div>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Tin tức công nghệ
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chia sẻ tư vấn
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Đánh giá sản phẩm
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Hướng dẫn, giải đáp
            </li>
            <li className="FCi-topic">
              <img src={chevronForward} alt="chevron-forward"/>
              Chính sách bảo mật
            </li>
          </ul>
        </div>

        <div className="FC-item">
          <ul className="FCi-list">
            <div className="FCi-name">Kết nối với chúng tôi</div>
            <li className="FCi-topic">
              <img src={logoFacebook} />
              BK Robotic
            </li>
            <li className="FCi-topic">
              <img src={zalo}  />
              0987654321
            </li>
            <li className="FCi-topic">
              <img src={gmail}  />
              BK_Robotic@tmdt.com
            </li>
            <img src={footer} id="imgBCT" />
          </ul>
        </div>
        </div>
        <div className="footer-end">
        Copyright © 2022 - BK Robotic . All Rights Reserved.
        </div>
    </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
