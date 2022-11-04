import React from 'react';
import customer from '../news_img/customer/1.jpg';

function Customer() {
  return (
    <div id="customer">
  <div className="news-topic">
    <div className="news-topic-name">Chia sẻ của khách hàng</div>
    <div className="readmore">
      Xem thêm <ion-icon name="chevron-forward-outline" />
    </div>
  </div>
  <div className="news-container">
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
    <div className="news-item">
      <img src={customer} alt="" className="Nsi-img" />
      <div className="Nsi-name">Anh/chị</div>
      <div className="Nsi-desc">Lời nhắn</div>
    </div>
  </div>
</div>

  )
}

export default Customer